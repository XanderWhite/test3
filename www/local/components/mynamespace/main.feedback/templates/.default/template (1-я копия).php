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
	<? if (!empty($arResult["ERROR_MESSAGE"])) {
		foreach ($arResult["ERROR_MESSAGE"] as $v)
			ShowError($v);
	}
	if (!empty($arResult["OK_MESSAGE"])) {
	?><div class="mf-ok-text"><?= $arResult["OK_MESSAGE"] ?></div><?
																}
																	?>
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
						'checked' => true,
						'required' => true,
						'text' => 'не убирай галочку'
					]
				),

				\TAO::frontend()->renderBlock(
					'forms/forms-submit',
					[
						'name' => 'submit',
						'value' => GetMessage("MFT_SUBMIT"),
					]
				)
			]
		]
	);

	?>

	<form class="mfeedback__form" action="<?= POST_FORM_ACTION_URI ?>" method="POST">
		<?= bitrix_sessid_post() ?>
		<div class="mf-name">
			<div class="mf-text">
				<?= GetMessage("MFT_NAME") ?><? if (empty($arParams["REQUIRED_FIELDS"]) || in_array("NAME", $arParams["REQUIRED_FIELDS"])): ?><span class="mf-req">*</span><? endif ?>
			</div>
			<input type="text" name="user_name" value="<?= $arResult["AUTHOR_NAME"] ?>">
		</div>
		<div class="mf-email">
			<div class="mf-text">
				<?= GetMessage("MFT_EMAIL") ?><? if (empty($arParams["REQUIRED_FIELDS"]) || in_array("EMAIL", $arParams["REQUIRED_FIELDS"])): ?><span class="mf-req">*</span><? endif ?>
			</div>
			<input type="text" name="user_email" value="<?= $arResult["AUTHOR_EMAIL"] ?>">
		</div>

		<div class="mf-country">
			<select name="user_country">
				<option value=""><?= GetMessage("MFT_COUNTRY_SELECT") ?></option>
				<?php foreach ($arResult["COUNTRIES"] as $country): ?>
					<option value="<?= $country['NAME'] ?>" <?= ($arResult["AUTHOR_COUNTRY"] == $country['NAME'] ? 'selected' : '') ?>>
						<?= $country['NAME'] ?>
					</option>
				<?php endforeach; ?>
			</select>
			<div class="mf-text">
				<?= GetMessage("MFT_COUNTRY") ?><? if (empty($arParams["REQUIRED_FIELDS"]) || in_array("COUNTRY", $arParams["REQUIRED_FIELDS"])): ?><span class="mf-req">*</span><? endif ?>
			</div>
		</div>

		<div class="mf-message">
			<div class="mf-text">
				<?= GetMessage("MFT_MESSAGE") ?><? if (empty($arParams["REQUIRED_FIELDS"]) || in_array("MESSAGE", $arParams["REQUIRED_FIELDS"])): ?><span class="mf-req">*</span><? endif ?>
			</div>
			<textarea name="MESSAGE" rows="5" cols="40"><?= ($arResult["MESSAGE"] ?? '') ?></textarea>
		</div>

		<input class="mfeedback__form__btn-submit" type="submit" name="submit" value="<?= GetMessage("MFT_SUBMIT") ?>">
	</form>
</div>