<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
print_r($arResult['MY_ITEMS'][0]['PROPERTIES']);
?>
<script>
    window.newsData = <?= json_encode([
                            'title' => $APPLICATION->getTitle(),
                            'items' => $arResult['MY_ITEMS']
                        ]) ?>;
</script>