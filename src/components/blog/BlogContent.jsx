import DOMPurify from 'dompurify';

const BlogContent = ({ content }) => {
    const sanitize = (html) => DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['strong', 'em', 'br', 'a'],
        ALLOWED_ATTR: ['href', 'target'],
    });

    return (
        <div style={{ maxWidth: '720px' }}>
            {content.map((block, i) => {
                switch (block.type) {
                    case 'heading':
                        return (
                            <h2 key={i} style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: 'var(--secondary)',
                                marginTop: i === 0 ? 0 : '40px',
                                marginBottom: '16px',
                            }}>{block.text}</h2>
                        );
                    case 'paragraph':
                        return (
                            <p key={i} style={{
                                color: 'var(--charcoal)',
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                marginBottom: '20px',
                            }}
                                dangerouslySetInnerHTML={{ __html: sanitize(block.text) }}
                            />
                        );
                    case 'list':
                        return (
                            <ul key={i} style={{
                                marginBottom: '24px',
                                paddingLeft: '0',
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                            }}>
                                {block.items.map((item, j) => (
                                    <li key={j} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                        color: 'var(--charcoal)',
                                        fontSize: '1rem',
                                        lineHeight: 1.7,
                                    }}>
                                        <div style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: 'var(--primary)',
                                            flexShrink: 0,
                                            marginTop: '8px',
                                        }} />
                                        <span dangerouslySetInnerHTML={{ __html: sanitize(item) }} />
                                    </li>
                                ))}
                            </ul>
                        );
                    case 'callout':
                        return (
                            <div key={i} style={{
                                padding: '20px 24px',
                                background: 'rgba(21, 101, 192, 0.06)',
                                borderLeft: '4px solid var(--accent)',
                                borderRadius: '0 12px 12px 0',
                                marginBottom: '24px',
                            }}>
                                <p style={{
                                    color: 'var(--secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.7,
                                    fontWeight: 500,
                                }}
                                    dangerouslySetInnerHTML={{ __html: sanitize(block.text) }}
                                />
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default BlogContent;
