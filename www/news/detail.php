<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "мои новости с других планет");
\TAO::frontendJs('react');
?>
<div id="app"></div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php");
