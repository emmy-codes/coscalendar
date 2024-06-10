export function getCookie (name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim(); // Trim whitespace from the cookie string
                if (cookie.substring(0, name.length + 1) === (name + "=")) {
                    // If the cookie starts with the target name
                    cookieValue = decodeURIComponent(
                        cookie.substring(name.length + 1) // Get cookie value and decode URI components
                    );
                    break; // Exit the loop once found
                }
            }
        }
        return cookieValue;
    }
