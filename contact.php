[php]if (!empty($_POST)) {
        global $wpdb;
        $table = table_name;
        $data = array(
            'name' => $_POST['name'],
            'email' => $_POST['email'],
            'subject' => $_POST['subject'],
            'message' => $_POST['message'],
        );
        $format = array(
            '%s',
            '%s',
            '%s',
            '%s'
        );
        $success=$wpdb->insert( $table, $data, $format );
        if($success){
            echo 'data has been save' ; 
        }
    } else {
        [/php]
        <form method="post" action="contact.php" id="contact-form">
                <input name="name" type="text">
                <input name="email" type="email">
                <input name="subject" type="text">
                <input name="message" type="text">
                <input type="submit" name="submit" value="send">
</form>
       [php]
    }  
[/php]