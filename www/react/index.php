<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("react");

\TAO::frontendJs('react');
?><div id="app">
</div>
<?$APPLICATION->IncludeComponent(
	"mynamespace:country.list", 
	"json", 
	array(
		"IBLOCK_ID" => "5",
		"COMPONENT_TEMPLATE" => "json"
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>