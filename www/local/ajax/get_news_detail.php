<?php
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');

header('Content-Type: application/json');

if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) ||
    strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
    die(json_encode(['error' => 'Only AJAX requests allowed']));
}


$newsId = (int)$_GET['id'];
if (!$newsId) {
    echo json_encode([
        'success' => false,
        'message' => 'Не указан ID новости'
    ]);
    exit;
}

$iblockId = 5;

$res = CIBlockElement::GetList(
    [],
    [
        'IBLOCK_ID' => $iblockId,
        'ACTIVE' => 'Y',
        'ID' => $newsId
    ],
    false,
    false,
    [
        'ID',
        'NAME',
        'PREVIEW_TEXT',
        'DETAIL_TEXT',
        'DATE_ACTIVE_FROM',
        'PREVIEW_PICTURE',
        'DETAIL_PICTURE',
        'DETAIL_PAGE_URL',
    ]
);

if ($item = $res->GetNext()) {
    if ($item['PREVIEW_PICTURE']) {
        $item['PREVIEW_PICTURE'] = CFile::GetPath($item['PREVIEW_PICTURE']);
    }
    if ($item['DETAIL_PICTURE']) {
        $item['DETAIL_PICTURE'] = CFile::GetPath($item['DETAIL_PICTURE']);
    }

    if ($item['DETAIL_TEXT_TYPE'] == 'html') {
        $item['DETAIL_TEXT'] = $item['~DETAIL_TEXT'];
    }

    echo json_encode([
        'success' => true,
        'data' => $item
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Новость не найдена'
    ]);
}

require($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/epilog_after.php');