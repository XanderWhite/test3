<?php
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');

header('Content-Type: application/json');

if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) ||
    strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
    die(json_encode(['error' => 'Only AJAX requests allowed']));
}

$name = 'test3.belov';

$referer = parse_url($_SERVER['HTTP_REFERER'] ?? '', PHP_URL_HOST);
if ($referer !== $name) {
    die(json_encode(['error' => 'Invalid request source']));
}

$iblockId = 5;

$res = CIBlockElement::GetList(
    ['DATE_ACTIVE_FROM' => 'DESC'],
    ['IBLOCK_ID' => $iblockId, 'ACTIVE' => 'Y'],
    false,
    false,
    ['ID', 'NAME', 'PREVIEW_TEXT', 'DETAIL_TEXT', 'DATE_ACTIVE_FROM', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL']
);

$news = [];
while ($item = $res->GetNext()) {
    if ($item['PREVIEW_PICTURE']) {
        $item['PREVIEW_PICTURE'] = CFile::GetPath($item['PREVIEW_PICTURE']);
    }
    $news[] = $item;
}

echo json_encode([
    'success' => true,
    'data' => $news
]);

require($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/epilog_after.php');