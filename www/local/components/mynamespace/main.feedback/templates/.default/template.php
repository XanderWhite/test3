<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/**
 * Bitrix vars
 *
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponentTemplate $this
 * @global CMain $APPLICATION
 * @global CUser $USER
 */
?>
<div class="mfeedback">
	<? echo \TAO::frontend()->renderBlock(
		'forms/forms-notification',
		[
			'okMessage' => $arResult["OK_MESSAGE"]
		]
	) ?>


	<? echo \TAO::frontend()->renderBlock(
		'forms/forms-form',
		[
			'action' => POST_FORM_ACTION_URI,
			'method' => 'POST',
			'bitrixSessidPost' => bitrix_sessid_post(),
			'fields' => [
				\TAO::frontend()->renderBlock(
					'forms/forms-text',
					[
						'name' => 'user_name',
						'label' => GetMessage("MFT_NAME"),
						'value' => $arResult["AUTHOR_NAME"],
						'required' => empty($arParams["REQUIRED_FIELDS"]) || in_array("NAME", $arParams["REQUIRED_FIELDS"]),
					]
				),

				\TAO::frontend()->renderBlock(
					'forms/forms-mail',
					[
						'name' => 'user_email',
						'label' => GetMessage("MFT_EMAIL"),
						'value' => $arResult["AUTHOR_EMAIL"],
						'required' => empty($arParams["REQUIRED_FIELDS"]) || in_array("EMAIL", $arParams["REQUIRED_FIELDS"]),
					]
				),

				\TAO::frontend()->renderBlock(
					'forms/forms-phone',
					[
						'name' => 'user_phone',
						'label' => GetMessage("MFT_PHONE"),
						'value' => $arResult["AUTHOR_PHONE"],
						'required' => empty($arParams["REQUIRED_FIELDS"]) || in_array("PHONE", $arParams["REQUIRED_FIELDS"]),
					]
				),


				\TAO::frontend()->renderBlock(
					'forms/forms-select',
					[
						'name' => 'user_country',
						'label' => GetMessage("MFT_COUNTRY_SELECT"),
						'value' => $arResult["AUTHOR_COUNTRY"],
						'required' => empty($arParams["REQUIRED_FIELDS"]) || in_array("COUNTRY", $arParams["REQUIRED_FIELDS"]),
						'items' => $arResult["COUNTRIES"]
					]
				),

				\TAO::frontend()->renderBlock(
					'forms/forms-textarea',
					[
						'name' => 'MESSAGE',
						'label' => GetMessage("MFT_MESSAGE"),
						'value' => $arResult["MESSAGE"],
						'required' => empty($arParams["REQUIRED_FIELDS"]) || in_array("MESSAGE", $arParams["REQUIRED_FIELDS"]),
						'rows' => "5",
						'cols' => "40"
					]
				),

				\TAO::frontend()->renderBlock(
					'forms/forms-checkbox',
					[
						'name' => 'PERSONAL_AGREE',
						'label' => GetMessage("MFT_PERSONAL_AGREEMENT_TEXT"),
						'checked' => false,
						'required' => true,
						'text' => 'не убирай галочку'
					]
				),

				\TAO::frontend()->renderBlock(
					'forms/forms-submit',
					[
						'name' => 'submitBtn',
						'value' => GetMessage("MFT_SUBMIT"),
					]
				)
			]
		]
	);

	?>
</div>