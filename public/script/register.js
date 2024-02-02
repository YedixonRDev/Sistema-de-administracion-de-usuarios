document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = e.target.elements.user.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
        const res = await fetch("http://localhost:3001/api/v1/registeruser-app/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuario: user,
                email,
                password
            }),
        });

        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.status}`);
        }

        const data = await res.json();
        console.log("Respuesta del servidor:", data);

       

    } catch (error) {
        console.error("Error en la solicitud:", error.message);
      
    }
});
