<?php
// requested URL
$addr = strtolower($_SERVER['REQUEST_URI']);
$url = '';

// redirects
$contact = 'contact-us/';
$about = 'about-us';
$privacy = $about . 'privacy-policy/';
$service = 'building-services/';
$conversion = $service . 'conversions/';
$extension = $service . 'extensions/';
$kitchen = $service . 'kitchens/';
$bathroom = $service . 'bathrooms/';
$refurbish = $service . 'refurbishments/';
$carpentry = $service . 'carpentry-joinery/';

$redir = array(

	'index' => '',
	'welcome' => '',
	'home' => '',
	'priv' => $privacy,
	'gdpr' => $privacy,
	'cp' => $about,
	'us' => $about,
	'about' => $about,
	'build' => $service,
	'project' => $service,
	'portfolio' => $service,
	'conv' => $conversion,
	'loft' => $conversion,
	'roof' => $conversion,
	'attic' => $conversion,
	'gar' => $conversion,
	'cell' => $conversion,
	'ext' => $extension,
	'kitch' => $kitchen,
	'cook' => $kitchen,
	'bake' => $kitchen,
	'bath' => $bathroom,
	'shower' => $bathroom,
	'refurb' => $refurbish,
	'carp' => $carpentry,
	'join' => $carpentry,
	'cont' => $contact,
	'phone' => $contact,
	'mail' => $contact,
	'tel' => $contact

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
