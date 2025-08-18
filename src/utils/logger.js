const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const logToTerminal = async (level, message, component, action) => {
  try {
    const token = localStorage.getItem('token');
    
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}/api/v1/logging/client-log`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        level,
        message,
        component,
        action
      })
    });

    if (!response.ok) {
      console.warn(`Failed to log to terminal (${response.status}):`, {
        level,
        message,
        component,
        action
      });
    }
  } catch (error) {
    console.warn('Failed to log to terminal:', error);
  }
};

export const logger = {
  info: (message, component, action) => logToTerminal('INFO', message, component, action),
  error: (message, component, action) => logToTerminal('ERROR', message, component, action),
  warn: (message, component, action) => logToTerminal('WARN', message, component, action),
  debug: (message, component, action) => logToTerminal('DEBUG', message, component, action)
};
