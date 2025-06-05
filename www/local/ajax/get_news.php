<?php
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');

header('Content-Type: application/json');

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