<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

class CountryListComponent extends CBitrixComponent
{
    public function executeComponent()
    {
        if (!CModule::IncludeModule('iblock')) {
            ShowError('Модуль iblock не установлен');
            return;
        }

        $filter = [
            'IBLOCK_ID' => $this->arParams['IBLOCK_ID'],
            'ACTIVE' => 'Y',
        ];
        

        $select = [
            'ID',
            'NAME',
        ];

        $res = CIBlockElement::GetList(
            ['NAME' => 'ASC'],
            $filter,
            false,
            false,
            $select
        );

        while ($elem = $res->GetNextElement()) {
            $fields = $elem->GetFields();
            $fields['PROPERTIES'] = $elem->GetProperties();
            $this->arResult['MY_ITEMS'][] = $fields;
        }

        $this->includeComponentTemplate();
    }
}
