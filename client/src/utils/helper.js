export const formatViews = (views) => {
    if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + 'M views';
    if (views >= 1_000) return (views / 1_000).toFixed(1) + 'K views';
    return views + ' views';
  };

export const formatTimeAgo = (isoDate) => {
    const now = new Date();
    const posted = new Date(isoDate);
    const diffInSeconds = Math.floor((now - posted) / 1000);
  
    const years = Math.floor(diffInSeconds / (60 * 60 * 24 * 365));
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
  
    const months = Math.floor(diffInSeconds / (60 * 60 * 24 * 30));
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  
    const days = Math.floor(diffInSeconds / (60 * 60 * 24));
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  
    const hours = Math.floor(diffInSeconds / (60 * 60));
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  
    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  
    return 'Just now';
};

export const isTokenExpired = (token) => {
    if (!token) return true;
  
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000; // convert to ms
      return Date.now() > expiry;
    } catch (err) {
      return true; // invalid token
    }
  };
  
