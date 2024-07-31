<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $empresa = $_POST['empresa'];
    $correo = $_POST['correo'];
    $check = $_POST['check'];
    $text = $_POST['text'];
    $clasificacion = $_POST['clasificacion'];
    $eficiencia = $_POST['eficiencia'];
    $recomendacion = $_POST['recomendacion'];
    $recomendaciones = $_POST['recomendaciones'];

    $destinatario = "lopeztevan643@gmail.com";

    $asunto = "Formulario Soluciones y Distribuciones S.A.S";
    
    $contenido = "Nombre Empresa:  $empresa\n";
    $contenido = "Correo electronico:  $correo\n";
    $contenido = "¿Utilizo el servicio?:  $check\n";
    $contenido = "¿Que otros servicios le gustaria ver?:  \n$text\n";
    $contenido = "¿Puntaje/clasificación?:  $clasificacion\n";
    $contenido = "¿Mejoro la eficiencia?:  $eficiencia\n";
    $contenido = "¿Lo recomendaria a otras personas?:  $recomendacion\n";
    $contenido = "Comentario:  $recomendaciones\n";

    $headers = "from: $empresa <$correo>";

    mail($destinatario, $asunto, $contenido, $headers);

    echo "Mensaje enviado con éxito. Gracias por sus respuestas.";
} else {
    header("location: index.html");
}
?>