<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

if (empty($arResult['COUNTRIES'])) {
    ShowError('Страны не найдены');
    return;
}

echo \TAO::frontend()->renderBlock(
	'common/country-list',
	[
		'title' => $APPLICATION->getTitle(),
        'countries'=>$arResult['COUNTRIES']
	]
);

?>
