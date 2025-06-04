<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("react");

\TAO::frontendJs('react');
?>

<div id='app'></div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>