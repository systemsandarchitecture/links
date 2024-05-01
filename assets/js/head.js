export function head(headTitle) {

  const head = document.querySelector('head');

  const headStructure = `
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <title>${headTitle}</title>
    <meta name="theme-color" content="#001848">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="msapplication-navbutton-color" content="#001848">
    <meta name="msapplication-starturl" content="./">
    <link href="../assets/css/basic.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@200..900&family=Raleway:wght@900&display=swap" rel="stylesheet">
      <link href="../assets/css/style.css" rel="stylesheet">
    <link href="../favicon.ico" rel="icon">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FQVBGZ3MR7"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FQVBGZ3MR7');
    </script>
    `;

  head.innerHTML = headStructure;
}
