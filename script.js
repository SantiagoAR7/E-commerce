/*function searchProducts() {
    var searchTerm = document.getElementById("searchInput").value;
  
    // Verifica si el término de búsqueda es válido
    if (searchTerm.trim() !== "") {
      // Simulación de búsqueda: redirige a la página de productos
      window.location.href = "productos.html";
    } else {
      // Muestra un mensaje si el término de búsqueda está vacío
      alert("Por favor, ingresa un término de búsqueda válido.");
    }
  }
  */

  function searchProducts() {
    // Obtener el valor del campo de búsqueda
    var searchTerm = document.getElementById("searchInput").value;

    // Comprobar si el término de búsqueda no está vacío
    if (searchTerm.trim() !== "") {
        // Redireccionar a la página de Mercado Libre con el término de búsqueda
        window.location.href = "https://www.mercadolibre.com.ar/" /*+ encodeURIComponent(searchTerm);*/
    } else {
        // Mostrar un mensaje de alerta si el campo de búsqueda está vacío
        alert("Por favor, ingrese un término de búsqueda antes de hacer clic en Buscar.");
    }
}
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    alert("Nombre: " + name + "\nEmail: " + email + "\nMensaje: " + message);
  }

  let quantities = {}; // Objeto para almacenar las cantidades de cada producto

  function decreaseQuantity(quantityId) {
    var quantityElement = document.getElementById(quantityId);
    var currentQuantity = parseInt(quantityElement.innerText);

    if (currentQuantity > 1) {
      quantityElement.innerText = currentQuantity - 1;
    }
  }

  function increaseQuantity(quantityId) {
    var quantityElement = document.getElementById(quantityId);
    var currentQuantity = parseInt(quantityElement.innerText);

    quantityElement.innerText = currentQuantity + 1;
  }

  function addToCart(productName, productPrice, quantityId) {
    var quantity = parseInt(document.getElementById(quantityId).innerText);
    alert("Añadir al carrito: " + quantity + "x " + productName + " - Precio: $" + productPrice);
    // Puedes agregar más lógica aquí, como enviar la información al servidor.
  }
  
  