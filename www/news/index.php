<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Новости");
\TAO::frontendJs('react');
?>
<div id="app"></div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>