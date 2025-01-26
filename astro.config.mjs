import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import {
    transformerNotationDiff,
    transformerNotationFocus,
    transformerMetaHighlight,
    transformerNotationHighlight,
    transformerNotationErrorLevel,
    transformerNotationWordHighlight,
} from '@shikijs/transformers'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx()],
    markdown: {
        shikiConfig: {
            themes: {
                light: "github-light",
                dark: "github-dark"
            },
            transformers: [
                transformerNotationDiff(),
                transformerNotationFocus(),
                transformerMetaHighlight(),
                transformerNotationHighlight(),
                transformerNotationErrorLevel(),
                transformerNotationWordHighlight(),
            ],
            defaultColor: false,
        }
    }
});
