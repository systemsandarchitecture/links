export function head(headTitle) {

  const head = document.querySelector('head');

  const headStructure = `
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <title>${headTitle}</title>
    <meta name="theme-color" content="#0050b4">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="msapplication-navbutton-color" content="#0050b4">
    <meta name="msapplication-starturl" content="./">
    <link href="../assets/css/basic.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,700,900" rel="stylesheet">
    <link href="../assets/css/style.css" rel="stylesheet">
    <link href="../favicon.ico" rel="icon">
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141701136-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-141701136-1');
    </script>
  `;

  head.innerHTML = headStructure;
}
