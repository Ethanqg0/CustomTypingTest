let form: HTMLFormElement | null = null;

function validateForm(form: HTMLFormElement): boolean {
  //TODO
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  form = (document.querySelector("#signup-form") as HTMLFormElement) || null;

  const username = document.getElementById("username") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;
  const fullName = document.getElementById("full-name") as HTMLInputElement;
  const verifyPassword = document.getElementById(
    "verify-password"
  ) as HTMLInputElement;

  const formResponse = validateForm(form);

  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      // Add register validation here

      // Perform request to server here
      try {
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
            full_name: fullName.value,
          }),
        });

        if (response.ok) {
            localStorage.setItem("username", username.value);
            alert("User registered successfully!");
            window.location.href = "/src/index.html";
        } else {
            alert("An error occurred while registering the user. Does this user already exist?");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }

      return;
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#login-form') as HTMLFormElement;
    const username = document.querySelector("#login-username") as HTMLInputElement;
    const password = document.querySelector("#login-password") as HTMLInputElement;

    if (!form) {
        return;
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                })
            });

            if (response.ok) {
                localStorage.setItem("username", username.value);
                alert('User logged in successfully!');
                window.location.href = '/src/index.html';
            } else {
                alert('An error occurred while logging in. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    });
});

