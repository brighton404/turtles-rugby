// TypeScript Script for Detecting and Styling Markdown Content

// CSS styles as a template literal
const markdownStyles = `
<style>
    .markdown-content {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f8f9fa;
        padding: 20px;
    }

    .markdown-content h1 {
        font-size: 2em;
        font-weight: bold;
        border-bottom: 2px solid #ddd;
        margin: 1em 0;
    }

    .markdown-content h2 {
        font-size: 1.75em;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
        margin: 1em 0;
    }

    .markdown-content h3 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 1em 0;
    }

    .markdown-content ul {
        padding-left: 1.5em;
        margin: 1em 0;
    }

    .markdown-content ul li {
        list-style-type: disc;
    }

    .markdown-content ol {
        padding-left: 1.5em;
        margin: 1em 0;
    }

    .markdown-content ol li {
        list-style-type: decimal;
    }

    .markdown-content pre {
        background: #f4f4f4;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow-x: auto;
    }

    .markdown-content code {
        font-family: 'Courier New', Courier, monospace;
        background: #f4f4f4;
        padding: 2px 4px;
        border-radius: 3px;
    }

    .markdown-content blockquote {
        padding-left: 1.5em;
        border-left: 5px solid #ddd;
        color: #555;
        font-style: italic;
        background-color: #f9f9f9;
    }

    .markdown-content a {
        color: #007bff;
        text-decoration: none;
    }

    .markdown-content a:hover {
        text-decoration: underline;
    }

    .markdown-content img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }
</style>
`;

// Function to parse Markdown and convert it to HTML
function parseMarkdown(markdown: string): string {
    // Simple Markdown-to-HTML conversion
    return markdown
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/^\- (.*$)/gim, '<li>$1</li>')
        .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
        .replace(/^\s*\n\*\*(.*)\*\*\s*\n/gim, '<strong>$1</strong>')
        .replace(/^\s*\n\*(.*)\*\s*\n/gim, '<em>$1</em>')
        .replace(/`(.*?)`/gim, '<code>$1</code>')
        .replace(/\n$/gim, '<br />')
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
}

// Function to apply Markdown styles
function applyMarkdownStyles(): void {
    // Add styles to the page
    document.head.insertAdjacentHTML('beforeend', markdownStyles);

    // Select all elements with the class `markdown-content`
    const markdownElements = document.querySelectorAll('.markdown-content');

    markdownElements.forEach((element) => {
        const markdown = element.textContent || '';
        const htmlContent = parseMarkdown(markdown);
        element.innerHTML = htmlContent; // Replace content with parsed HTML
    });
}

// Apply Markdown styles when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', applyMarkdownStyles);
