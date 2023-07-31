<?php

namespace GeneroWP\WooCommerceBlocks;

use Illuminate\Support\Str;
use ReflectionClass;
use stdClass;

abstract class Block
{
    public stdClass $block;
    public string $name;
    public stdClass $attributes;
    public string $content;
    public string $className;
    public string $classes;

    public function getPath(string $path = null): string
    {
        if ($path) {
            return sprintf('%s/%s', $this->getDir(), $path);
        }

        return $this->getDir();
    }

    public function getDir(): string
    {
        return dirname((new ReflectionClass($this))->getFileName());
    }

    public function compose(): void
    {
        add_action('init', function () {
            $this->register($this->getPath('build/block.json'));
        });
    }

    protected function register($path): void
    {
        \register_block_type_from_metadata(
            dirname($path),
            $this->build()
        );
    }

    public function build(): array
    {
        return [
            'render_callback' => function ($attributes, $content) {
                return $this->render($attributes, $content);
            }
        ];
    }

    public function render($attributes, $content): string
    {
        $this->block = json_decode(file_get_contents($this->getPath('build/block.json')));
        $this->name = $this->block->name;
        $this->attributes = (object) $attributes;
        $this->content = $content;
        $this->className = Str::start(Str::slug(Str::replaceFirst('/', '-', $this->name), '-'), 'wp-block-');
        $this->classes = collect([
            'slug' => $this->className,
            'align' => !empty($this->attributes->align) ? Str::start($this->attributes->align, 'align') : false,
            'color' => !empty($this->attributes->textColor) ? "has-{$this->attributes->textColor}-color has-text-color" : false,
            'background' => !empty($this->attributes->backgroundColor) ? "has-{$this->attributes->backgroundColor}-background-color has-background" : false,
            'classes' => $this->attributes->className ?? false,
        ])->filter()->implode(' ');

        return $this->view(
            Str::after($this->name, '/'),
            [
                'block' => $this,
                'content' => $this->content,
                'attributes' => $this->attributes,
            ]
        );
    }

    public function view($view, $attributes): string
    {
        $template = $this->bladeTemplate($view)
            ?: locate_template($this->templateDirectory() . $view . '.php')
            ?: $this->getPath(sprintf('views/%s.php', $view));

        extract($attributes);
        ob_start();
        require $template;
        return ob_get_clean();
    }

    protected function bladeTemplate($view)
    {
        if (!function_exists('app')) {
            return null;
        }

        $themeTemplates = app('sage.finder')->locate($this->templateDirectory() . $view . '.blade.php');
        if (!$themeTemplates) {
            return null;
        }

        $template = locate_template($themeTemplates);
        if (!$template) {
            return null;
        }

        return view($template)->makeLoader();
    }

    protected function templateDirectory(): string
    {
        return 'genero-woocommerce/';
    }

}
