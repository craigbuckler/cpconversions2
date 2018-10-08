<?php
// requested URL
$addr = strtolower($_SERVER['REQUEST_URI']);
$url = '';

// redirects
$redir = array(

	'index' => '',
	'welcome' => '',
	'home' => '',
	'contact' => 'contact-us/',
	'phone' => 'contact-us/',
	'mail' => 'contact-us/',
	'tel' => 'contact-us/'

);
foreach ($redir as $pold => $pnew) if (strpos($addr, $pold) !== false) $url = '/* @echo rootURL */' . $pnew;

if ($url !== '') {

	// redirect found
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: ' . $url);

}
else {

	// show error page
	header('HTTP/1.0 404 Not Found');
	include('error/index.html');

}
