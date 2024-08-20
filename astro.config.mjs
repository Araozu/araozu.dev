import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import {
    transformerNotationDiff,
    transformerNotationFocus,
    transformerMetaHighlight,
    transformerNotationHighlight,
    transformerNotationErrorLevel,
} from '@shikijs/transformers'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx()],
    markdown: {
        shikiConfig: {
            themes: {
                light: "catppuccin-latte",
                dark: "dark-plus"
            },
            transformers: [
                transformerNotationDiff(),
                transformerNotationFocus(),
                transformerMetaHighlight(),
                transformerNotationHighlight(),
                transformerNotationErrorLevel(),
            ],
            defaultColor: false,
        }
    }
});
