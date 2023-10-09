<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nom = $_POST["nom"];
  $email = $_POST["email"];
  $message = $_POST["message"];

 
  $destinataire = "pressylou@hotmail.com";
  $sujet = "Nouveau message de contact de $nom";
  $corps_message = "Nom: $nom\n";
  $corps_message .= "E-mail: $email\n";
  $corps_message .= "Message:\n$message";


  if (mail($destinataire, $sujet, $corps_message)) {
    echo "Votre message a été envoyé avec succès.";
  } else {
    echo "Une erreur s'est produite lors de l'envoi du message.";
  }
}
?>
