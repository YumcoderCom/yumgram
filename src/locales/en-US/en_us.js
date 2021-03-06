/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

const tr = {
  app_name: 'Telegram',

  modal_search: 'Search',
  // modal_close: 'Close',
  // modal_edit: 'Edit',
  modal_cancel: 'Cancel',
  modal_more: 'More...',
  modal_next: 'Next',
  modal_ok: 'OK',
  // modal_done: 'Done',

  badbrowser_desc1_md:
    "Don't take this personally, but your browser is too old to run **Telegram Web**.",
  badbrowser_desc2_md:
    'We require HTML5 support for the MTProto secure messaging protocol to work.',
  badbrowser_desc3_md: "Unfortunately, your current browser doesn't support HTML5.",
  badbrowser_desc4_md: 'Please download a modern browser and come back soon!',
  badbrowser_download_ff: 'Download Mozilla Firefox',
  badbrowser_download_chrome: 'Download Google Chrome',

  login_toolbar_next: 'Next',
  login_sign_in: 'Sign in',
  login_enter_number_description: 'Please choose your country and enter your full phone number.',
  login_incorrect_number: 'Incorrect phone number',
  login_incorrect_app_signup_forbidden:
    "You can't register via Telegram Web. It mentions that you can register via mobile app.",
  login_code_input_placeholder: 'Code',
  login_tel_input_placeholder: 'Phone',
  login_tel_input_label: 'Phone number',

  login_country_input_placeholder: 'Select a country',
  login_country: 'Country',
  login_country_input_label: 'Country',

  login_controller_unknown_country: 'Unknown',

  login_generating_key: 'Generating keys',
  login_generating_keys_info:
    'Keys are only generated once. This can take a few minutes on slower devices, please be patient.',
  login_edit_number: 'Edit phone number',
  login_enter_code_label_md:
    "We've sent the code to the **Telegram** app on your other device.\nPlease enter the code below.",
  login_enter_sms_code_label_md:
    "We've sent an **SMS** with an activation code to your phone.\nPlease enter the code below.",
  login_enter_call_code_label_md:
    'We are **calling** your phone to dictate a code.\nPlease enter the code below.',
  login_code_remaining: 'You will be able to request SMS in ',
  login_call_remaining: 'You will be able to request call in ',
  login_code_not_received: 'Send code via SMS',
  login_code_not_received_call: 'Send code via Call',
  login_code_requesting: 'Requesting code',
  login_incorrect_sms_code: 'Incorrect SMS code',
  login_number_input_placeholder: 'Enter your code',
  login_checking_code: 'Checking code',
  login_your_info: 'Your info',
  login_fulll_name_label: 'Please enter your full name to set up a Telegram account.',
  login_incorrect_first_name: 'Incorrect first name',
  login_first_name: 'First name',
  login_incorrect_last_name: 'Incorrect last name',
  login_last_name: 'Last name',
  login_signing_up: 'Signing up',
  // login_sign_up: 'Sign up',
  login_about_title: 'About',
  login_about_hide: 'hide',
  login_about_desc1_md:
    "The unofficial Telegram **react** web-client is a free, fast and secure way to enjoy most of **Telegram**'s features right in your **web-browser**.",
  login_about_desc2_md:
    'It is always synced with the **Telegram app** on your mobile device, which makes it a perfect tool for messaging and file sharing.',
  login_about_desc3_md:
    'Our [source code](https://github.com/YumcoderCom/yumgram) is open, so everyone can make a contribution.',
  login_about_intro: 'Welcome to the unofficial Telegram web-client.',
  login_about_learn: 'Learn more',
  login_password_title: 'Password',
  login_password_label:
    'You have enabled Two-Step Verification, so your account is protected with an additional password.',
  login_password_forgot_link: 'Forgot password?',
  login_account_reset: 'Reset account',
  login_password: 'Your password',
  login_incorrect_password: 'Incorrect password',
  login_checking_password: 'Checking',
  login_recovery_title: 'Forgot password?',
  // login_code_placeholder: 'Code',
  login_code_incorrect: 'Incorrect code',
  // login_recovery_description_md:
  //   'We have sent a recovery code to the e-mail you provided:\n\n{email}\n\nPlease check your e-mail and enter the 6-digit code we have sent here.',
  confirm_modal_login_phone_correct: 'Is this phone number correct?',

  confirm_modal_resize_desktop: 'Would you like to switch to desktop version?',
  confirm_modal_resize_mobile: 'Would you like to switch to mobile version?',
  country_select_modal_country_ab: 'Abkhazia',
  country_select_modal_country_af: 'Afghanistan',
  country_select_modal_country_ax: 'Åland Islands',
  country_select_modal_country_al: 'Albania',
  country_select_modal_country_dz: 'Algeria',
  country_select_modal_country_as: 'American Samoa',
  country_select_modal_country_ad: 'Andorra',
  country_select_modal_country_ao: 'Angola',
  country_select_modal_country_ai: 'Anguilla',
  country_select_modal_country_ag: 'Antigua & Barbuda',
  country_select_modal_country_ar: 'Argentina',
  country_select_modal_country_am: 'Armenia',
  country_select_modal_country_aw: 'Aruba',
  country_select_modal_country_sh_ac: 'Ascension',
  country_select_modal_country_au: 'Australia',
  country_select_modal_country_au_et: 'Australian External Territories',
  country_select_modal_country_at: 'Austria',
  country_select_modal_country_az: 'Azerbaijan',
  country_select_modal_country_bs: 'Bahamas',
  country_select_modal_country_bh: 'Bahrain',
  country_select_modal_country_bd: 'Bangladesh',
  country_select_modal_country_bb: 'Barbados',
  country_select_modal_country_ag_bar: 'Barbuda',
  country_select_modal_country_by: 'Belarus',
  country_select_modal_country_be: 'Belgium',
  country_select_modal_country_bz: 'Belize',
  country_select_modal_country_bj: 'Benin',
  country_select_modal_country_bm: 'Bermuda',
  country_select_modal_country_bt: 'Bhutan',
  country_select_modal_country_bo: 'Bolivia',
  country_select_modal_country_bq: 'Caribbean Netherlands',
  country_select_modal_country_ba: 'Bosnia & Herzegovina',
  country_select_modal_country_bw: 'Botswana',
  country_select_modal_country_br: 'Brazil',
  country_select_modal_country_io: 'British Indian Ocean Territory',
  country_select_modal_country_vg: 'British Virgin Islands',
  country_select_modal_country_bn: 'Brunei',
  country_select_modal_country_bg: 'Bulgaria',
  country_select_modal_country_bf: 'Burkina Faso',
  country_select_modal_country_mm: 'Myanmar (Burma)',
  country_select_modal_country_bi: 'Burundi',
  country_select_modal_country_kh: 'Cambodia',
  country_select_modal_country_cm: 'Cameroon',
  country_select_modal_country_ca: 'Canada',
  country_select_modal_country_cv: 'Cape Verde',
  country_select_modal_country_ky: 'Cayman Islands',
  country_select_modal_country_cf: 'Central African Republic',
  country_select_modal_country_td: 'Chad',
  country_select_modal_country_cl: 'Chile',
  country_select_modal_country_cn: 'China',
  country_select_modal_country_cx: 'Christmas Island',
  country_select_modal_country_cc: 'Cocos (Keeling) Islands',
  country_select_modal_country_co: 'Colombia',
  country_select_modal_country_km: 'Comoros',
  country_select_modal_country_cg: 'Congo - Brazzaville',
  country_select_modal_country_cd: 'Congo - Kinshasa',
  country_select_modal_country_ck: 'Cook Islands',
  country_select_modal_country_cr: 'Costa Rica',
  country_select_modal_country_ci: 'Côte d’Ivoire',
  country_select_modal_country_hr: 'Croatia',
  country_select_modal_country_cu: 'Cuba',
  country_select_modal_country_cw: 'Curaçao',
  country_select_modal_country_cy: 'Cyprus',
  country_select_modal_country_cz: 'Czech Republic',
  country_select_modal_country_dk: 'Denmark',
  country_select_modal_country_dg: 'Diego Garcia',
  country_select_modal_country_dj: 'Djibouti',
  country_select_modal_country_dm: 'Dominica',
  country_select_modal_country_do: 'Dominican Republic',
  country_select_modal_country_tl: 'Timor-Leste',
  country_select_modal_country_ec: 'Ecuador',
  country_select_modal_country_eg: 'Egypt',
  country_select_modal_country_sv: 'El Salvador',
  country_select_modal_country_gq: 'Equatorial Guinea',
  country_select_modal_country_er: 'Eritrea',
  country_select_modal_country_ee: 'Estonia',
  country_select_modal_country_et: 'Ethiopia',
  country_select_modal_country_fk: 'Falkland Islands',
  country_select_modal_country_fo: 'Faroe Islands',
  country_select_modal_country_fj: 'Fiji',
  country_select_modal_country_fi: 'Finland',
  country_select_modal_country_fr: 'France',
  country_select_modal_country_gf: 'French Guiana',
  country_select_modal_country_pf: 'French Polynesia',
  country_select_modal_country_ga: 'Gabon',
  country_select_modal_country_gm: 'Gambia',
  country_select_modal_country_ge: 'Georgia',
  country_select_modal_country_de: 'Germany',
  country_select_modal_country_gh: 'Ghana',
  country_select_modal_country_gi: 'Gibraltar',
  country_select_modal_country_gr: 'Greece',
  country_select_modal_country_gl: 'Greenland',
  country_select_modal_country_gd: 'Grenada',
  country_select_modal_country_gp: 'Guadeloupe',
  country_select_modal_country_gu: 'Guam',
  country_select_modal_country_gt: 'Guatemala',
  country_select_modal_country_gg: 'Guernsey',
  country_select_modal_country_gn: 'Guinea',
  country_select_modal_country_gw: 'Guinea-Bissau',
  country_select_modal_country_gy: 'Guyana',
  country_select_modal_country_ht: 'Haiti',
  country_select_modal_country_hn: 'Honduras',
  country_select_modal_country_hk: 'Hong Kong SAR China',
  country_select_modal_country_hu: 'Hungary',
  country_select_modal_country_is: 'Iceland',
  country_select_modal_country_in: 'India',
  country_select_modal_country_id: 'Indonesia',
  country_select_modal_country_ir: 'Iran',
  country_select_modal_country_iq: 'Iraq',
  country_select_modal_country_ie: 'Ireland',
  country_select_modal_country_il: 'Israel',
  country_select_modal_country_it: 'Italy',
  country_select_modal_country_jm: 'Jamaica',
  country_select_modal_country_sj: 'Svalbard & Jan Mayen',
  country_select_modal_country_jp: 'Japan',
  country_select_modal_country_je: 'Jersey',
  country_select_modal_country_jo: 'Jordan',
  country_select_modal_country_kz: 'Kazakhstan',
  country_select_modal_country_ke: 'Kenya',
  country_select_modal_country_ki: 'Kiribati',
  country_select_modal_country_kp: 'North Korea',
  country_select_modal_country_kr: 'South Korea',
  country_select_modal_country_kw: 'Kuwait',
  country_select_modal_country_kg: 'Kyrgyzstan',
  country_select_modal_country_la: 'Laos',
  country_select_modal_country_lv: 'Latvia',
  country_select_modal_country_lb: 'Lebanon',
  country_select_modal_country_ls: 'Lesotho',
  country_select_modal_country_lr: 'Liberia',
  country_select_modal_country_ly: 'Libya',
  country_select_modal_country_li: 'Liechtenstein',
  country_select_modal_country_lt: 'Lithuania',
  country_select_modal_country_lu: 'Luxembourg',
  country_select_modal_country_mo: 'Macau SAR China',
  country_select_modal_country_mk: 'Macedonia',
  country_select_modal_country_mg: 'Madagascar',
  country_select_modal_country_mw: 'Malawi',
  country_select_modal_country_my: 'Malaysia',
  country_select_modal_country_mv: 'Maldives',
  country_select_modal_country_ml: 'Mali',
  country_select_modal_country_mt: 'Malta',
  country_select_modal_country_mh: 'Marshall Islands',
  country_select_modal_country_mq: 'Martinique',
  country_select_modal_country_mr: 'Mauritania',
  country_select_modal_country_mu: 'Mauritius',
  country_select_modal_country_yt: 'Mayotte',
  country_select_modal_country_mx: 'Mexico',
  country_select_modal_country_fm: 'Micronesia',
  country_select_modal_country_md: 'Moldova',
  country_select_modal_country_mc: 'Monaco',
  country_select_modal_country_mn: 'Mongolia',
  country_select_modal_country_me: 'Montenegro',
  country_select_modal_country_ms: 'Montserrat',
  country_select_modal_country_ma: 'Morocco',
  country_select_modal_country_mz: 'Mozambique',
  country_select_modal_country_na: 'Namibia',
  country_select_modal_country_nr: 'Nauru',
  country_select_modal_country_np: 'Nepal',
  country_select_modal_country_nl: 'Netherlands',
  country_select_modal_country_nc: 'New Caledonia',
  country_select_modal_country_nz: 'New Zealand',
  country_select_modal_country_ni: 'Nicaragua',
  country_select_modal_country_ne: 'Niger',
  country_select_modal_country_ng: 'Nigeria',
  country_select_modal_country_nu: 'Niue',
  country_select_modal_country_nf: 'Norfolk Island',
  country_select_modal_country_mp: 'Northern Mariana Islands',
  country_select_modal_country_no: 'Norway',
  country_select_modal_country_om: 'Oman',
  country_select_modal_country_pk: 'Pakistan',
  country_select_modal_country_pw: 'Palau',
  country_select_modal_country_ps: 'Palestinian Territories',
  country_select_modal_country_pa: 'Panama',
  country_select_modal_country_pg: 'Papua New Guinea',
  country_select_modal_country_py: 'Paraguay',
  country_select_modal_country_pe: 'Peru',
  country_select_modal_country_ph: 'Philippines',
  country_select_modal_country_pn: 'Pitcairn Islands',
  country_select_modal_country_pl: 'Poland',
  country_select_modal_country_pt: 'Portugal',
  country_select_modal_country_pr: 'Puerto Rico',
  country_select_modal_country_qa: 'Qatar',
  country_select_modal_country_re: 'Réunion',
  country_select_modal_country_ro: 'Romania',
  country_select_modal_country_ru: 'Russia',
  country_select_modal_country_rw: 'Rwanda',
  country_select_modal_country_bl: 'St. Barthélemy',
  country_select_modal_country_sh: 'St. Helena',
  country_select_modal_country_kn: 'St. Kitts & Nevis',
  country_select_modal_country_lc: 'St. Lucia',
  country_select_modal_country_mf: 'St. Martin (France)',
  country_select_modal_country_pm: 'St. Pierre and Miquelon',
  country_select_modal_country_vc: 'St. Vincent and the Grenadines',
  country_select_modal_country_ws: 'Samoa',
  country_select_modal_country_sm: 'San Marino',
  country_select_modal_country_st: 'São Tomé & Príncipe',
  country_select_modal_country_sa: 'Saudi Arabia',
  country_select_modal_country_sn: 'Senegal',
  country_select_modal_country_rs: 'Serbia',
  country_select_modal_country_sc: 'Seychelles',
  country_select_modal_country_sl: 'Sierra Leone',
  country_select_modal_country_sg: 'Singapore',
  country_select_modal_country_nl_bq3: 'Sint Eustatius',
  country_select_modal_country_sx: 'Sint Maarten',
  country_select_modal_country_sk: 'Slovakia',
  country_select_modal_country_si: 'Slovenia',
  country_select_modal_country_sb: 'Solomon Islands',
  country_select_modal_country_so: 'Somalia',
  country_select_modal_country_za: 'South Africa',
  country_select_modal_country_gs: 'South Georgia & South Sandwich Islands',
  country_select_modal_country_ge_so: 'South Ossetia',
  country_select_modal_country_ss: 'South Sudan',
  country_select_modal_country_es: 'Spain',
  country_select_modal_country_lk: 'Sri Lanka',
  country_select_modal_country_sd: 'Sudan',
  country_select_modal_country_sr: 'Suriname',
  country_select_modal_country_sj_no: 'Svalbard',
  country_select_modal_country_sz: 'Swaziland',
  country_select_modal_country_se: 'Sweden',
  country_select_modal_country_ch: 'Switzerland',
  country_select_modal_country_sy: 'Syria',
  country_select_modal_country_tw: 'Taiwan',
  country_select_modal_country_tj: 'Tajikistan',
  country_select_modal_country_tz: 'Tanzania',
  country_select_modal_country_th: 'Thailand',
  country_select_modal_country_tg: 'Togo',
  country_select_modal_country_tk: 'Tokelau',
  country_select_modal_country_to: 'Tonga',
  country_select_modal_country_tt: 'Trinidad & Tobago',
  country_select_modal_country_tn: 'Tunisia',
  country_select_modal_country_tr: 'Turkey',
  country_select_modal_country_tm: 'Turkmenistan',
  country_select_modal_country_tc: 'Turks & Caicos Islands',
  country_select_modal_country_tv: 'Tuvalu',
  country_select_modal_country_ug: 'Uganda',
  country_select_modal_country_ua: 'Ukraine',
  country_select_modal_country_ae: 'United Arab Emirates',
  country_select_modal_country_uk: 'United Kingdom',
  country_select_modal_country_us: 'United States',
  country_select_modal_country_uy: 'Uruguay',
  country_select_modal_country_vi: 'U.S. Virgin Islands',
  country_select_modal_country_uz: 'Uzbekistan',
  country_select_modal_country_vu: 'Vanuatu',
  country_select_modal_country_ve: 'Venezuela',
  country_select_modal_country_va: 'Vatican City',
  country_select_modal_country_vn: 'Vietnam',
  country_select_modal_country_wf: 'Wallis & Futuna',
  country_select_modal_country_ye: 'Yemen',
  country_select_modal_country_zm: 'Zambia',
  country_select_modal_country_tz_uk: 'Zanzibar',
  country_select_modal_country_zw: 'Zimbabwe',
};

export default { translation: tr };
