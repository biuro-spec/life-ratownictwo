import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '32px',
                    textAlign: 'center',
                }}>
                    <div>
                        <h1 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: '2rem',
                            color: '#0D1B2A',
                            marginBottom: '16px',
                        }}>
                            Coś poszło nie tak
                        </h1>
                        <p style={{
                            color: '#3D4F5F',
                            marginBottom: '32px',
                            lineHeight: 1.7,
                        }}>
                            Przepraszamy za niedogodności. Spróbuj odświeżyć stronę.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="btn-premium"
                            style={{ cursor: 'pointer' }}
                        >
                            Odśwież stronę
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
