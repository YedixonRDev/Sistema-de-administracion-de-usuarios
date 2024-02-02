document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");

    logoutBtn.addEventListener("click", async () => {
        try {
            // Obtener el token almacenado 
            const token = localStorage.getItem('accessToken');

            // Solicitud del token
            if (!token) {
                throw new Error('No se encontró el token de acceso');
            }

            // Realizar la solicitud al servidor para cerrar sesión
            const res = await fetch("http://localhost:3001/api/v1/registeruser-app/logout", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error(`Error en la solicitud: ${res.status}`);
            }

            // Limpiar el token de acceso 
            localStorage.removeItem('accessToken');

            // Redirigir a la página de inicio de sesión
            window.location.href = '/public/login.html';
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
         
        }
    });
});
