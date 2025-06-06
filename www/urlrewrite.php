<?php
$arUrlRewrite=array (
  0 => 
  array (
    'CONDITION' => '#^/news/([0-9]+)/?(\\?.*)?$#',
    'RULE' => 'ELEMENT_ID=$1',
    'ID' => 'bitrix:news.detail',
    'PATH' => '/news/detail.php',
    'SORT' => 100,
  ),
);
