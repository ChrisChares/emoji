(function () {

'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('emoji', ['$scope', function($scope) {

  	$scope.alert = { type: 'danger', msg: 'This doesn\'t work in desktop Chrome' };
  	
  	$scope.emojis = [
  	  [
  	   '1&#x20e3;', 
  	   'KEYCAP 1'
  	  ], 
  	  [
  	   '2&#x20e3;', 
  	   'KEYCAP 2'
  	  ], 
  	  [
  	   '3&#x20e3;', 
  	   'KEYCAP 3'
  	  ], 
  	  [
  	   '4&#x20e3;', 
  	   'KEYCAP 4'
  	  ], 
  	  [
  	   '5&#x20e3;', 
  	   'KEYCAP 5'
  	  ], 
  	  [
  	   '6&#x20e3;', 
  	   'KEYCAP 6'
  	  ], 
  	  [
  	   '7&#x20e3;', 
  	   'KEYCAP 7'
  	  ], 
  	  [
  	   '8&#x20e3;', 
  	   'KEYCAP 8'
  	  ], 
  	  [
  	   '9&#x20e3;', 
  	   'KEYCAP 9'
  	  ], 
  	  [
  	   '0&#x20e3;', 
  	   'KEYCAP 0'
  	  ], 
  	  [
  	   '&#x1f51f;', 
  	   'KEYCAP TEN'
  	  ], 
  	  [
  	   '&#x1f522;', 
  	   'INPUT SYMBOL FOR NUMBERS'
  	  ], 
  	  [
  	   '#&#x20e3;', 
  	   'HASH KEY'
  	  ], 
  	  [
  	   '&#x1f523;', 
  	   'INPUT SYMBOL FOR SYMBOLS'
  	  ], 
  	  [
  	   '&#x2b06;', 
  	   'UPWARDS BLACK ARROW'
  	  ], 
  	  [
  	   '&#x2b07;', 
  	   'DOWNWARDS BLACK ARROW'
  	  ], 
  	  [
  	   '&#x2b05;', 
  	   'LEFTWARDS BLACK ARROW'
  	  ], 
  	  [
  	   '&#x27a1;', 
  	   'BLACK RIGHTWARDS ARROW'
  	  ], 
  	  [
  	   '&#x1f520;', 
  	   'INPUT SYMBOL FOR LATIN CAPITAL LETTERS'
  	  ], 
  	  [
  	   '&#x1f521;', 
  	   'INPUT SYMBOL FOR LATIN SMALL LETTERS'
  	  ], 
  	  [
  	   '&#x1f524;', 
  	   'INPUT SYMBOL FOR LATIN LETTERS'
  	  ], 
  	  [
  	   '&#x2197;', 
  	   'NORTH EAST ARROW'
  	  ], 
  	  [
  	   '&#x2196;', 
  	   'NORTH WEST ARROW'
  	  ], 
  	  [
  	   '&#x2198;', 
  	   'SOUTH EAST ARROW'
  	  ], 
  	  [
  	   '&#x2199;', 
  	   'SOUTH WEST ARROW'
  	  ], 
  	  [
  	   '&#x2194;', 
  	   'LEFT RIGHT ARROW'
  	  ], 
  	  [
  	   '&#x2195;', 
  	   'UP DOWN ARROW'
  	  ], 
  	  [
  	   '&#x1f504;', 
  	   'ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS'
  	  ], 
  	  [
  	   '&#x25c0;', 
  	   'BLACK LEFT-POINTING TRIANGLE'
  	  ], 
  	  [
  	   '&#x25b6;', 
  	   'BLACK RIGHT-POINTING TRIANGLE'
  	  ], 
  	  [
  	   '&#x1f53c;', 
  	   'UP-POINTING SMALL RED TRIANGLE'
  	  ], 
  	  [
  	   '&#x1f53d;', 
  	   'DOWN-POINTING SMALL RED TRIANGLE'
  	  ], 
  	  [
  	   '&#x21a9;', 
  	   'LEFTWARDS ARROW WITH HOOK'
  	  ], 
  	  [
  	   '&#x21aa;', 
  	   'RIGHTWARDS ARROW WITH HOOK'
  	  ], 
  	  [
  	   '&#x2139;', 
  	   'INFORMATION SOURCE'
  	  ], 
  	  [
  	   '&#x23ea;', 
  	   'BLACK LEFT-POINTING DOUBLE TRIANGLE'
  	  ], 
  	  [
  	   '&#x23e9;', 
  	   'BLACK RIGHT-POINTING DOUBLE TRIANGLE'
  	  ], 
  	  [
  	   '&#x23eb;', 
  	   'BLACK UP-POINTING DOUBLE TRIANGLE'
  	  ], 
  	  [
  	   '&#x23ec;', 
  	   'BLACK DOWN-POINTING DOUBLE TRIANGLE'
  	  ], 
  	  [
  	   '&#x2935;', 
  	   'ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS'
  	  ], 
  	  [
  	   '&#x2934;', 
  	   'ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS'
  	  ], 
  	  [
  	   '&#x1f197;', 
  	   'SQUARED OK'
  	  ], 
  	  [
  	   '&#x1f500;', 
  	   'TWISTED RIGHTWARDS ARROWS'
  	  ], 
  	  [
  	   '&#x1f501;', 
  	   'CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS'
  	  ], 
  	  [
  	   '&#x1f502;', 
  	   'CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY'
  	  ], 
  	  [
  	   '&#x1f195;', 
  	   'SQUARED NEW'
  	  ], 
  	  [
  	   '&#x1f199;', 
  	   'SQUARED UP WITH EXCLAMATION MARK'
  	  ], 
  	  [
  	   '&#x1f192;', 
  	   'SQUARED COOL'
  	  ], 
  	  [
  	   '&#x1f193;', 
  	   'SQUARED FREE'
  	  ], 
  	  [
  	   '&#x1f196;', 
  	   'SQUARED NG'
  	  ], 
  	  [
  	   '&#x1f4f6;', 
  	   'ANTENNA WITH BARS'
  	  ], 
  	  [
  	   '&#x1f3a6;', 
  	   'CINEMA'
  	  ], 
  	  [
  	   '&#x1f201;', 
  	   'SQUARED KATAKANA KOKO'
  	  ], 
  	  [
  	   '&#x1f22f;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-6307'
  	  ], 
  	  [
  	   '&#x1f233;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-7A7A'
  	  ], 
  	  [
  	   '&#x1f235;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-6E80'
  	  ], 
  	  [
  	   '&#x1f234;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-5408'
  	  ], 
  	  [
  	   '&#x1f232;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-7981'
  	  ], 
  	  [
  	   '&#x1f250;', 
  	   'CIRCLED IDEOGRAPH ADVANTAGE'
  	  ], 
  	  [
  	   '&#x1f239;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-5272'
  	  ], 
  	  [
  	   '&#x1f23a;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-55B6'
  	  ], 
  	  [
  	   '&#x1f236;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-6709'
  	  ], 
  	  [
  	   '&#x1f21a;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-7121'
  	  ], 
  	  [
  	   '&#x1f6bb;', 
  	   'RESTROOM'
  	  ], 
  	  [
  	   '&#x1f6b9;', 
  	   'MENS SYMBOL'
  	  ], 
  	  [
  	   '&#x1f6ba;', 
  	   'WOMENS SYMBOL'
  	  ], 
  	  [
  	   '&#x1f6bc;', 
  	   'BABY SYMBOL'
  	  ], 
  	  [
  	   '&#x1f6be;', 
  	   'WATER CLOSET'
  	  ], 
  	  [
  	   '&#x1f6b0;', 
  	   'POTABLE WATER SYMBOL'
  	  ], 
  	  [
  	   '&#x1f6ae;', 
  	   'PUT LITTER IN ITS PLACE SYMBOL'
  	  ], 
  	  [
  	   '&#x1f17f;', 
  	   'NEGATIVE SQUARED LATIN CAPITAL LETTER P'
  	  ], 
  	  [
  	   '&#x267f;', 
  	   'WHEELCHAIR SYMBOL'
  	  ], 
  	  [
  	   '&#x1f6ad;', 
  	   'NO SMOKING SYMBOL'
  	  ], 
  	  [
  	   '&#x1f237;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-6708'
  	  ], 
  	  [
  	   '&#x1f238;', 
  	   'SQUARED CJK UNIFIED IDEOGRAPH-7533'
  	  ], 
  	  [
  	   '&#x1f202;', 
  	   'SQUARED KATAKANA SA'
  	  ], 
  	  [
  	   '&#x24c2;', 
  	   'CIRCLED LATIN CAPITAL LETTER M'
  	  ], 
  	  [
  	   '&#x1f6c2;', 
  	   'PASSPORT CONTROL'
  	  ], 
  	  [
  	   '&#x1f6c4;', 
  	   'BAGGAGE CLAIM'
  	  ], 
  	  [
  	   '&#x1f6c5;', 
  	   'LEFT LUGGAGE'
  	  ], 
  	  [
  	   '&#x1f6c3;', 
  	   'CUSTOMS'
  	  ], 
  	  [
  	   '&#x1f251;', 
  	   'CIRCLED IDEOGRAPH ACCEPT'
  	  ], 
  	  [
  	   '&#x3299;', 
  	   'CIRCLED IDEOGRAPH SECRET'
  	  ], 
  	  [
  	   '&#x3297;', 
  	   'CIRCLED IDEOGRAPH CONGRATULATION'
  	  ], 
  	  [
  	   '&#x1f191;', 
  	   'SQUARED CL'
  	  ], 
  	  [
  	   '&#x1f198;', 
  	   'SQUARED SOS'
  	  ], 
  	  [
  	   '&#x1f194;', 
  	   'SQUARED ID'
  	  ], 
  	  [
  	   '&#x1f6ab;', 
  	   'NO ENTRY SIGN'
  	  ], 
  	  [
  	   '&#x1f51e;', 
  	   'NO ONE UNDER EIGHTEEN SYMBOL'
  	  ], 
  	  [
  	   '&#x1f4f5;', 
  	   'NO MOBILE PHONES'
  	  ], 
  	  [
  	   '&#x1f6af;', 
  	   'DO NOT LITTER SYMBOL'
  	  ], 
  	  [
  	   '&#x1f6b1;', 
  	   'NON-POTABLE WATER SYMBOL'
  	  ], 
  	  [
  	   '&#x1f6b3;', 
  	   'NO BICYCLES'
  	  ], 
  	  [
  	   '&#x1f6b7;', 
  	   'NO PEDESTRIANS'
  	  ], 
  	  [
  	   '&#x1f6b8;', 
  	   'CHILDREN CROSSING'
  	  ], 
  	  [
  	   '&#x26d4;', 
  	   'NO ENTRY'
  	  ], 
  	  [
  	   '&#x2733;', 
  	   'EIGHT SPOKED ASTERISK'
  	  ], 
  	  [
  	   '&#x2747;', 
  	   'SPARKLE'
  	  ], 
  	  [
  	   '&#x274e;', 
  	   'NEGATIVE SQUARED CROSS MARK'
  	  ], 
  	  [
  	   '&#x2705;', 
  	   'WHITE HEAVY CHECK MARK'
  	  ], 
  	  [
  	   '&#x2734;', 
  	   'EIGHT POINTED BLACK STAR'
  	  ], 
  	  [
  	   '&#x1f49f;', 
  	   'HEART DECORATION'
  	  ], 
  	  [
  	   '&#x1f19a;', 
  	   'SQUARED VS'
  	  ], 
  	  [
  	   '&#x1f4f3;', 
  	   'VIBRATION MODE'
  	  ], 
  	  [
  	   '&#x1f4f4;', 
  	   'MOBILE PHONE OFF'
  	  ], 
  	  [
  	   '&#x1f170;', 
  	   'NEGATIVE SQUARED LATIN CAPITAL LETTER A'
  	  ], 
  	  [
  	   '&#x1f171;', 
  	   'NEGATIVE SQUARED LATIN CAPITAL LETTER B'
  	  ], 
  	  [
  	   '&#x1f18e;', 
  	   'NEGATIVE SQUARED AB'
  	  ], 
  	  [
  	   '&#x1f17e;', 
  	   'NEGATIVE SQUARED LATIN CAPITAL LETTER O'
  	  ], 
  	  [
  	   '&#x1f4a0;', 
  	   'DIAMOND SHAPE WITH A DOT INSIDE'
  	  ], 
  	  [
  	   '&#x27bf;', 
  	   'DOUBLE CURLY LOOP'
  	  ], 
  	  [
  	   '&#x267b;', 
  	   'BLACK UNIVERSAL RECYCLING SYMBOL'
  	  ], 
  	  [
  	   '&#x2648;', 
  	   'ARIES'
  	  ], 
  	  [
  	   '&#x2649;', 
  	   'TAURUS'
  	  ], 
  	  [
  	   '&#x264a;', 
  	   'GEMINI'
  	  ], 
  	  [
  	   '&#x264b;', 
  	   'CANCER'
  	  ], 
  	  [
  	   '&#x264c;', 
  	   'LEO'
  	  ], 
  	  [
  	   '&#x264d;', 
  	   'VIRGO'
  	  ], 
  	  [
  	   '&#x264e;', 
  	   'LIBRA'
  	  ], 
  	  [
  	   '&#x264f;', 
  	   'SCORPIUS'
  	  ], 
  	  [
  	   '&#x2650;', 
  	   'SAGITTARIUS'
  	  ], 
  	  [
  	   '&#x2651;', 
  	   'CAPRICORN'
  	  ], 
  	  [
  	   '&#x2652;', 
  	   'AQUARIUS'
  	  ], 
  	  [
  	   '&#x2653;', 
  	   'PISCES'
  	  ], 
  	  [
  	   '&#x26ce;', 
  	   'OPHIUCHUS'
  	  ], 
  	  [
  	   '&#x1f52f;', 
  	   'SIX POINTED STAR WITH MIDDLE DOT'
  	  ], 
  	  [
  	   '&#x1f3e7;', 
  	   'AUTOMATED TELLER MACHINE'
  	  ], 
  	  [
  	   '&#x1f4b9;', 
  	   'CHART WITH UPWARDS TREND AND YEN SIGN'
  	  ], 
  	  [
  	   '&#x1f4b2;', 
  	   'HEAVY DOLLAR SIGN'
  	  ], 
  	  [
  	   '&#x1f4b1;', 
  	   'CURRENCY EXCHANGE'
  	  ], 
  	  [
  	   '&#xa9;', 
  	   'COPYRIGHT SIGN'
  	  ], 
  	  [
  	   '&#xae;', 
  	   'REGISTERED SIGN'
  	  ], 
  	  [
  	   '&#x2122;', 
  	   'TRADE MARK SIGN'
  	  ], 
  	  [
  	   '&#x274c;', 
  	   'CROSS MARK'
  	  ], 
  	  [
  	   '&#x203c;', 
  	   'DOUBLE EXCLAMATION MARK'
  	  ], 
  	  [
  	   '&#x2049;', 
  	   'EXCLAMATION QUESTION MARK'
  	  ], 
  	  [
  	   '&#x2757;', 
  	   'HEAVY EXCLAMATION MARK SYMBOL'
  	  ], 
  	  [
  	   '&#x2753;', 
  	   'BLACK QUESTION MARK ORNAMENT'
  	  ], 
  	  [
  	   '&#x2755;', 
  	   'WHITE EXCLAMATION MARK ORNAMENT'
  	  ], 
  	  [
  	   '&#x2754;', 
  	   'WHITE QUESTION MARK ORNAMENT'
  	  ], 
  	  [
  	   '&#x2b55;', 
  	   'HEAVY LARGE CIRCLE'
  	  ], 
  	  [
  	   '&#x1f51d;', 
  	   'TOP WITH UPWARDS ARROW ABOVE'
  	  ], 
  	  [
  	   '&#x1f51a;', 
  	   'END WITH LEFTWARDS ARROW ABOVE'
  	  ], 
  	  [
  	   '&#x1f519;', 
  	   'BACK WITH LEFTWARDS ARROW ABOVE'
  	  ], 
  	  [
  	   '&#x1f51b;', 
  	   'ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE'
  	  ], 
  	  [
  	   '&#x1f51c;', 
  	   'SOON WITH RIGHTWARDS ARROW ABOVE'
  	  ], 
  	  [
  	   '&#x1f503;', 
  	   'CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS'
  	  ], 
  	  [
  	   '&#x1f55b;', 
  	   'CLOCK FACE TWELVE OCLOCK'
  	  ], 
  	  [
  	   '&#x1f567;', 
  	   'CLOCK FACE TWELVE-THIRTY'
  	  ], 
  	  [
  	   '&#x1f550;', 
  	   'CLOCK FACE ONE OCLOCK'
  	  ], 
  	  [
  	   '&#x1f55c;', 
  	   'CLOCK FACE ONE-THIRTY'
  	  ], 
  	  [
  	   '&#x1f551;', 
  	   'CLOCK FACE TWO OCLOCK'
  	  ], 
  	  [
  	   '&#x1f55d;', 
  	   'CLOCK FACE TWO-THIRTY'
  	  ], 
  	  [
  	   '&#x1f552;', 
  	   'CLOCK FACE THREE OCLOCK'
  	  ], 
  	  [
  	   '&#x1f55e;', 
  	   'CLOCK FACE THREE-THIRTY'
  	  ], 
  	  [
  	   '&#x1f553;', 
  	   'CLOCK FACE FOUR OCLOCK'
  	  ], 
  	  [
  	   '&#x1f55f;', 
  	   'CLOCK FACE FOUR-THIRTY'
  	  ], 
  	  [
  	   '&#x1f554;', 
  	   'CLOCK FACE FIVE OCLOCK'
  	  ], 
  	  [
  	   '&#x1f560;', 
  	   'CLOCK FACE FIVE-THIRTY'
  	  ], 
  	  [
  	   '&#x1f555;', 
  	   'CLOCK FACE SIX OCLOCK'
  	  ], 
  	  [
  	   '&#x1f556;', 
  	   'CLOCK FACE SEVEN OCLOCK'
  	  ], 
  	  [
  	   '&#x1f557;', 
  	   'CLOCK FACE EIGHT OCLOCK'
  	  ], 
  	  [
  	   '&#x1f558;', 
  	   'CLOCK FACE NINE OCLOCK'
  	  ], 
  	  [
  	   '&#x1f559;', 
  	   'CLOCK FACE TEN OCLOCK'
  	  ], 
  	  [
  	   '&#x1f55a;', 
  	   'CLOCK FACE ELEVEN OCLOCK'
  	  ], 
  	  [
  	   '&#x1f561;', 
  	   'CLOCK FACE SIX-THIRTY'
  	  ], 
  	  [
  	   '&#x1f562;', 
  	   'CLOCK FACE SEVEN-THIRTY'
  	  ], 
  	  [
  	   '&#x1f563;', 
  	   'CLOCK FACE EIGHT-THIRTY'
  	  ], 
  	  [
  	   '&#x1f564;', 
  	   'CLOCK FACE NINE-THIRTY'
  	  ], 
  	  [
  	   '&#x1f565;', 
  	   'CLOCK FACE TEN-THIRTY'
  	  ], 
  	  [
  	   '&#x1f566;', 
  	   'CLOCK FACE ELEVEN-THIRTY'
  	  ], 
  	  [
  	   '&#x2716;', 
  	   'HEAVY MULTIPLICATION X'
  	  ], 
  	  [
  	   '&#x2795;', 
  	   'HEAVY PLUS SIGN'
  	  ], 
  	  [
  	   '&#x2796;', 
  	   'HEAVY MINUS SIGN'
  	  ], 
  	  [
  	   '&#x2797;', 
  	   'HEAVY DIVISION SIGN'
  	  ], 
  	  [
  	   '&#x2660;', 
  	   'BLACK SPADE SUIT'
  	  ], 
  	  [
  	   '&#x2665;', 
  	   'BLACK HEART SUIT'
  	  ], 
  	  [
  	   '&#x2663;', 
  	   'BLACK CLUB SUIT'
  	  ], 
  	  [
  	   '&#x2666;', 
  	   'BLACK DIAMOND SUIT'
  	  ], 
  	  [
  	   '&#x1f4ae;', 
  	   'WHITE FLOWER'
  	  ], 
  	  [
  	   '&#x1f4af;', 
  	   'HUNDRED POINTS SYMBOL'
  	  ], 
  	  [
  	   '&#x2714;', 
  	   'HEAVY CHECK MARK'
  	  ], 
  	  [
  	   '&#x2611;', 
  	   'BALLOT BOX WITH CHECK'
  	  ], 
  	  [
  	   '&#x1f518;', 
  	   'RADIO BUTTON'
  	  ], 
  	  [
  	   '&#x1f517;', 
  	   'LINK SYMBOL'
  	  ], 
  	  [
  	   '&#x27b0;', 
  	   'CURLY LOOP'
  	  ], 
  	  [
  	   '&#x3030;', 
  	   'WAVY DASH'
  	  ], 
  	  [
  	   '&#x303d;', 
  	   'PART ALTERNATION MARK'
  	  ], 
  	  [
  	   '&#x1f531;', 
  	   'TRIDENT EMBLEM'
  	  ], 
  	  [
  	   '&#x25fc;', 
  	   'BLACK MEDIUM SQUARE'
  	  ], 
  	  [
  	   '&#x25fb;', 
  	   'WHITE MEDIUM SQUARE'
  	  ], 
  	  [
  	   '&#x25fe;', 
  	   'BLACK MEDIUM SMALL SQUARE'
  	  ], 
  	  [
  	   '&#x25fd;', 
  	   'WHITE MEDIUM SMALL SQUARE'
  	  ], 
  	  [
  	   '&#x25aa;', 
  	   'BLACK SMALL SQUARE'
  	  ], 
  	  [
  	   '&#x25ab;', 
  	   'WHITE SMALL SQUARE'
  	  ], 
  	  [
  	   '&#x1f53a;', 
  	   'UP-POINTING RED TRIANGLE'
  	  ], 
  	  [
  	   '&#x1f532;', 
  	   'BLACK SQUARE BUTTON'
  	  ], 
  	  [
  	   '&#x1f533;', 
  	   'WHITE SQUARE BUTTON'
  	  ], 
  	  [
  	   '&#x26ab;', 
  	   'MEDIUM BLACK CIRCLE'
  	  ], 
  	  [
  	   '&#x26aa;', 
  	   'MEDIUM WHITE CIRCLE'
  	  ], 
  	  [
  	   '&#x1f534;', 
  	   'LARGE RED CIRCLE'
  	  ], 
  	  [
  	   '&#x1f535;', 
  	   'LARGE BLUE CIRCLE'
  	  ], 
  	  [
  	   '&#x1f53b;', 
  	   'DOWN-POINTING RED TRIANGLE'
  	  ], 
  	  [
  	   '&#x2b1c;', 
  	   'WHITE LARGE SQUARE'
  	  ], 
  	  [
  	   '&#x2b1b;', 
  	   'BLACK LARGE SQUARE'
  	  ], 
  	  [
  	   '&#x1f536;', 
  	   'LARGE ORANGE DIAMOND'
  	  ], 
  	  [
  	   '&#x1f537;', 
  	   'LARGE BLUE DIAMOND'
  	  ], 
  	  [
  	   '&#x1f538;', 
  	   'SMALL ORANGE DIAMOND'
  	  ], 
  	  [
  	   '&#x1f539;', 
  	   'SMALL BLUE DIAMOND'
  	  ],
  	  [
  	   '&#x1f436;', 
  	   'DOG FACE'
  	  ], 
  	  [
  	   '&#x1f43a;', 
  	   'WOLF FACE'
  	  ], 
  	  [
  	   '&#x1f431;', 
  	   'CAT FACE'
  	  ], 
  	  [
  	   '&#x1f42d;', 
  	   'MOUSE FACE'
  	  ], 
  	  [
  	   '&#x1f439;', 
  	   'HAMSTER FACE'
  	  ], 
  	  [
  	   '&#x1f430;', 
  	   'RABBIT FACE'
  	  ], 
  	  [
  	   '&#x1f438;', 
  	   'FROG FACE'
  	  ], 
  	  [
  	   '&#x1f42f;', 
  	   'TIGER FACE'
  	  ], 
  	  [
  	   '&#x1f428;', 
  	   'KOALA'
  	  ], 
  	  [
  	   '&#x1f43b;', 
  	   'BEAR FACE'
  	  ], 
  	  [
  	   '&#x1f437;', 
  	   'PIG FACE'
  	  ], 
  	  [
  	   '&#x1f43d;', 
  	   'PIG NOSE'
  	  ], 
  	  [
  	   '&#x1f42e;', 
  	   'COW FACE'
  	  ], 
  	  [
  	   '&#x1f417;', 
  	   'BOAR'
  	  ], 
  	  [
  	   '&#x1f435;', 
  	   'MONKEY FACE'
  	  ], 
  	  [
  	   '&#x1f412;', 
  	   'MONKEY'
  	  ], 
  	  [
  	   '&#x1f434;', 
  	   'HORSE FACE'
  	  ], 
  	  [
  	   '&#x1f411;', 
  	   'SHEEP'
  	  ], 
  	  [
  	   '&#x1f418;', 
  	   'ELEPHANT'
  	  ], 
  	  [
  	   '&#x1f43c;', 
  	   'PANDA FACE'
  	  ], 
  	  [
  	   '&#x1f427;', 
  	   'PENGUIN'
  	  ], 
  	  [
  	   '&#x1f426;', 
  	   'BIRD'
  	  ], 
  	  [
  	   '&#x1f424;', 
  	   'BABY CHICK'
  	  ], 
  	  [
  	   '&#x1f425;', 
  	   'FRONT-FACING BABY CHICK'
  	  ], 
  	  [
  	   '&#x1f423;', 
  	   'HATCHING CHICK'
  	  ], 
  	  [
  	   '&#x1f414;', 
  	   'CHICKEN'
  	  ], 
  	  [
  	   '&#x1f40d;', 
  	   'SNAKE'
  	  ], 
  	  [
  	   '&#x1f422;', 
  	   'TURTLE'
  	  ], 
  	  [
  	   '&#x1f41b;', 
  	   'BUG'
  	  ], 
  	  [
  	   '&#x1f41d;', 
  	   'HONEYBEE'
  	  ], 
  	  [
  	   '&#x1f41c;', 
  	   'ANT'
  	  ], 
  	  [
  	   '&#x1f41e;', 
  	   'LADY BEETLE'
  	  ], 
  	  [
  	   '&#x1f40c;', 
  	   'SNAIL'
  	  ], 
  	  [
  	   '&#x1f419;', 
  	   'OCTOPUS'
  	  ], 
  	  [
  	   '&#x1f41a;', 
  	   'SPIRAL SHELL'
  	  ], 
  	  [
  	   '&#x1f420;', 
  	   'TROPICAL FISH'
  	  ], 
  	  [
  	   '&#x1f41f;', 
  	   'FISH'
  	  ], 
  	  [
  	   '&#x1f42c;', 
  	   'DOLPHIN'
  	  ], 
  	  [
  	   '&#x1f433;', 
  	   'SPOUTING WHALE'
  	  ], 
  	  [
  	   '&#x1f40b;', 
  	   'WHALE'
  	  ], 
  	  [
  	   '&#x1f404;', 
  	   'COW'
  	  ], 
  	  [
  	   '&#x1f40f;', 
  	   'RAM'
  	  ], 
  	  [
  	   '&#x1f400;', 
  	   'RAT'
  	  ], 
  	  [
  	   '&#x1f403;', 
  	   'WATER BUFFALO'
  	  ], 
  	  [
  	   '&#x1f405;', 
  	   'TIGER'
  	  ], 
  	  [
  	   '&#x1f407;', 
  	   'RABBIT'
  	  ], 
  	  [
  	   '&#x1f409;', 
  	   'DRAGON'
  	  ], 
  	  [
  	   '&#x1f40e;', 
  	   'HORSE'
  	  ], 
  	  [
  	   '&#x1f410;', 
  	   'GOAT'
  	  ], 
  	  [
  	   '&#x1f413;', 
  	   'ROOSTER'
  	  ], 
  	  [
  	   '&#x1f415;', 
  	   'DOG'
  	  ], 
  	  [
  	   '&#x1f416;', 
  	   'PIG'
  	  ], 
  	  [
  	   '&#x1f401;', 
  	   'MOUSE'
  	  ], 
  	  [
  	   '&#x1f402;', 
  	   'OX'
  	  ], 
  	  [
  	   '&#x1f432;', 
  	   'DRAGON FACE'
  	  ], 
  	  [
  	   '&#x1f421;', 
  	   'BLOWFISH'
  	  ], 
  	  [
  	   '&#x1f40a;', 
  	   'CROCODILE'
  	  ], 
  	  [
  	   '&#x1f42b;', 
  	   'BACTRIAN CAMEL'
  	  ], 
  	  [
  	   '&#x1f42a;', 
  	   'DROMEDARY CAMEL'
  	  ], 
  	  [
  	   '&#x1f406;', 
  	   'LEOPARD'
  	  ], 
  	  [
  	   '&#x1f408;', 
  	   'CAT'
  	  ], 
  	  [
  	   '&#x1f429;', 
  	   'POODLE'
  	  ], 
  	  [
  	   '&#x1f43e;', 
  	   'PAW PRINTS'
  	  ], 
  	  [
  	   '&#x1f490;', 
  	   'BOUQUET'
  	  ], 
  	  [
  	   '&#x1f338;', 
  	   'CHERRY BLOSSOM'
  	  ], 
  	  [
  	   '&#x1f337;', 
  	   'TULIP'
  	  ], 
  	  [
  	   '&#x1f340;', 
  	   'FOUR LEAF CLOVER'
  	  ], 
  	  [
  	   '&#x1f339;', 
  	   'ROSE'
  	  ], 
  	  [
  	   '&#x1f33b;', 
  	   'SUNFLOWER'
  	  ], 
  	  [
  	   '&#x1f33a;', 
  	   'HIBISCUS'
  	  ], 
  	  [
  	   '&#x1f341;', 
  	   'MAPLE LEAF'
  	  ], 
  	  [
  	   '&#x1f343;', 
  	   'LEAF FLUTTERING IN WIND'
  	  ], 
  	  [
  	   '&#x1f342;', 
  	   'FALLEN LEAF'
  	  ], 
  	  [
  	   '&#x1f33f;', 
  	   'HERB'
  	  ], 
  	  [
  	   '&#x1f33e;', 
  	   'EAR OF RICE'
  	  ], 
  	  [
  	   '&#x1f344;', 
  	   'MUSHROOM'
  	  ], 
  	  [
  	   '&#x1f335;', 
  	   'CACTUS'
  	  ], 
  	  [
  	   '&#x1f334;', 
  	   'PALM TREE'
  	  ], 
  	  [
  	   '&#x1f332;', 
  	   'EVERGREEN TREE'
  	  ], 
  	  [
  	   '&#x1f333;', 
  	   'DECIDUOUS TREE'
  	  ], 
  	  [
  	   '&#x1f330;', 
  	   'CHESTNUT'
  	  ], 
  	  [
  	   '&#x1f331;', 
  	   'SEEDLING'
  	  ], 
  	  [
  	   '&#x1f33c;', 
  	   'BLOSSOM'
  	  ], 
  	  [
  	   '&#x1f310;', 
  	   'GLOBE WITH MERIDIANS'
  	  ], 
  	  [
  	   '&#x1f31e;', 
  	   'SUN WITH FACE'
  	  ], 
  	  [
  	   '&#x1f31d;', 
  	   'FULL MOON WITH FACE'
  	  ], 
  	  [
  	   '&#x1f31a;', 
  	   'NEW MOON WITH FACE'
  	  ], 
  	  [
  	   '&#x1f311;', 
  	   'NEW MOON SYMBOL'
  	  ], 
  	  [
  	   '&#x1f312;', 
  	   'WAXING CRESCENT MOON SYMBOL'
  	  ], 
  	  [
  	   '&#x1f313;', 
  	   'FIRST QUARTER MOON SYMBOL'
  	  ], 
  	  [
  	   '&#x1f314;', 
  	   'WAXING GIBBOUS MOON SYMBOL'
  	  ], 
  	  [
  	   '&#x1f315;', 
  	   'FULL MOON SYMBOL'
  	  ], 
  	  [
  	   '&#x1f316;', 
  	   'WANING GIBBOUS MOON SYMBOL'
  	  ], 
  	  [
  	   '&#x1f317;', 
  	   'LAST QUARTER MOON SYMBOL'
  	  ], 
  	  [
  	   '&#x1f318;', 
  	   'WANING CRESCENT MOON SYMBOL'
  	  ], 
  	  [
  	   '&#x1f31c;', 
  	   'LAST QUARTER MOON WITH FACE'
  	  ], 
  	  [
  	   '&#x1f31b;', 
  	   'FIRST QUARTER MOON WITH FACE'
  	  ], 
  	  [
  	   '&#x1f319;', 
  	   'CRESCENT MOON'
  	  ], 
  	  [
  	   '&#x1f30d;', 
  	   'EARTH GLOBE EUROPE-AFRICA'
  	  ], 
  	  [
  	   '&#x1f30e;', 
  	   'EARTH GLOBE AMERICAS'
  	  ], 
  	  [
  	   '&#x1f30f;', 
  	   'EARTH GLOBE ASIA-AUSTRALIA'
  	  ], 
  	  [
  	   '&#x1f30b;', 
  	   'VOLCANO'
  	  ], 
  	  [
  	   '&#x1f30c;', 
  	   'MILKY WAY'
  	  ], 
  	  [
  	   '&#x1f320;', 
  	   'SHOOTING STAR'
  	  ], 
  	  [
  	   '&#x2b50;', 
  	   'WHITE MEDIUM STAR'
  	  ], 
  	  [
  	   '&#x2600;', 
  	   'BLACK SUN WITH RAYS'
  	  ], 
  	  [
  	   '&#x26c5;', 
  	   'SUN BEHIND CLOUD'
  	  ], 
  	  [
  	   '&#x2601;', 
  	   'CLOUD'
  	  ], 
  	  [
  	   '&#x26a1;', 
  	   'HIGH VOLTAGE SIGN'
  	  ], 
  	  [
  	   '&#x2614;', 
  	   'UMBRELLA WITH RAIN DROPS'
  	  ], 
  	  [
  	   '&#x2744;', 
  	   'SNOWFLAKE'
  	  ], 
  	  [
  	   '&#x26c4;', 
  	   'SNOWMAN WITHOUT SNOW'
  	  ], 
  	  [
  	   '&#x1f300;', 
  	   'CYCLONE'
  	  ], 
  	  [
  	   '&#x1f301;', 
  	   'FOGGY'
  	  ], 
  	  [
  	   '&#x1f308;', 
  	   'RAINBOW'
  	  ], 
  	  [
  	   '&#x1f30a;', 
  	   'WATER WAVE'
  	  ],
  	  [
  	   '&#x1f38d;', 
  	   'PINE DECORATION'
  	  ], 
  	  [
  	   '&#x1f49d;', 
  	   'HEART WITH RIBBON'
  	  ], 
  	  [
  	   '&#x1f38e;', 
  	   'JAPANESE DOLLS'
  	  ], 
  	  [
  	   '&#x1f392;', 
  	   'SCHOOL SATCHEL'
  	  ], 
  	  [
  	   '&#x1f393;', 
  	   'GRADUATION CAP'
  	  ], 
  	  [
  	   '&#x1f38f;', 
  	   'CARP STREAMER'
  	  ], 
  	  [
  	   '&#x1f386;', 
  	   'FIREWORKS'
  	  ], 
  	  [
  	   '&#x1f387;', 
  	   'FIREWORK SPARKLER'
  	  ], 
  	  [
  	   '&#x1f390;', 
  	   'WIND CHIME'
  	  ], 
  	  [
  	   '&#x1f391;', 
  	   'MOON VIEWING CEREMONY'
  	  ], 
  	  [
  	   '&#x1f383;', 
  	   'JACK-O-LANTERN'
  	  ], 
  	  [
  	   '&#x1f47b;', 
  	   'GHOST'
  	  ], 
  	  [
  	   '&#x1f385;', 
  	   'FATHER CHRISTMAS'
  	  ], 
  	  [
  	   '&#x1f384;', 
  	   'CHRISTMAS TREE'
  	  ], 
  	  [
  	   '&#x1f381;', 
  	   'WRAPPED PRESENT'
  	  ], 
  	  [
  	   '&#x1f38b;', 
  	   'TANABATA TREE'
  	  ], 
  	  [
  	   '&#x1f389;', 
  	   'PARTY POPPER'
  	  ], 
  	  [
  	   '&#x1f38a;', 
  	   'CONFETTI BALL'
  	  ], 
  	  [
  	   '&#x1f388;', 
  	   'BALLOON'
  	  ], 
  	  [
  	   '&#x1f38c;', 
  	   'CROSSED FLAGS'
  	  ], 
  	  [
  	   '&#x1f52e;', 
  	   'CRYSTAL BALL'
  	  ], 
  	  [
  	   '&#x1f3a5;', 
  	   'MOVIE CAMERA'
  	  ], 
  	  [
  	   '&#x1f4f7;', 
  	   'CAMERA'
  	  ], 
  	  [
  	   '&#x1f4f9;', 
  	   'VIDEO CAMERA'
  	  ], 
  	  [
  	   '&#x1f4fc;', 
  	   'VIDEOCASSETTE'
  	  ], 
  	  [
  	   '&#x1f4bf;', 
  	   'OPTICAL DISC'
  	  ], 
  	  [
  	   '&#x1f4c0;', 
  	   'DVD'
  	  ], 
  	  [
  	   '&#x1f4bd;', 
  	   'MINIDISC'
  	  ], 
  	  [
  	   '&#x1f4be;', 
  	   'FLOPPY DISK'
  	  ], 
  	  [
  	   '&#x1f4bb;', 
  	   'PERSONAL COMPUTER'
  	  ], 
  	  [
  	   '&#x1f4f1;', 
  	   'MOBILE PHONE'
  	  ], 
  	  [
  	   '&#x260e;', 
  	   'BLACK TELEPHONE'
  	  ], 
  	  [
  	   '&#x1f4de;', 
  	   'TELEPHONE RECEIVER'
  	  ], 
  	  [
  	   '&#x1f4df;', 
  	   'PAGER'
  	  ], 
  	  [
  	   '&#x1f4e0;', 
  	   'FAX MACHINE'
  	  ], 
  	  [
  	   '&#x1f4e1;', 
  	   'SATELLITE ANTENNA'
  	  ], 
  	  [
  	   '&#x1f4fa;', 
  	   'TELEVISION'
  	  ], 
  	  [
  	   '&#x1f4fb;', 
  	   'RADIO'
  	  ], 
  	  [
  	   '&#x1f50a;', 
  	   'SPEAKER WITH THREE SOUND WAVES'
  	  ], 
  	  [
  	   '&#x1f509;', 
  	   'SPEAKER WITH ONE SOUND WAVE'
  	  ], 
  	  [
  	   '&#x1f508;', 
  	   'SPEAKER'
  	  ], 
  	  [
  	   '&#x1f507;', 
  	   'SPEAKER WITH CANCELLATION STROKE'
  	  ], 
  	  [
  	   '&#x1f514;', 
  	   'BELL'
  	  ], 
  	  [
  	   '&#x1f515;', 
  	   'BELL WITH CANCELLATION STROKE'
  	  ], 
  	  [
  	   '&#x1f4e2;', 
  	   'PUBLIC ADDRESS LOUDSPEAKER'
  	  ], 
  	  [
  	   '&#x1f4e3;', 
  	   'CHEERING MEGAPHONE'
  	  ], 
  	  [
  	   '&#x23f3;', 
  	   'HOURGLASS WITH FLOWING SAND'
  	  ], 
  	  [
  	   '&#x231b;', 
  	   'HOURGLASS'
  	  ], 
  	  [
  	   '&#x23f0;', 
  	   'ALARM CLOCK'
  	  ], 
  	  [
  	   '&#x231a;', 
  	   'WATCH'
  	  ], 
  	  [
  	   '&#x1f513;', 
  	   'OPEN LOCK'
  	  ], 
  	  [
  	   '&#x1f512;', 
  	   'LOCK'
  	  ], 
  	  [
  	   '&#x1f50f;', 
  	   'LOCK WITH INK PEN'
  	  ], 
  	  [
  	   '&#x1f510;', 
  	   'CLOSED LOCK WITH KEY'
  	  ], 
  	  [
  	   '&#x1f511;', 
  	   'KEY'
  	  ], 
  	  [
  	   '&#x1f50e;', 
  	   'RIGHT-POINTING MAGNIFYING GLASS'
  	  ], 
  	  [
  	   '&#x1f4a1;', 
  	   'ELECTRIC LIGHT BULB'
  	  ], 
  	  [
  	   '&#x1f526;', 
  	   'ELECTRIC TORCH'
  	  ], 
  	  [
  	   '&#x1f506;', 
  	   'HIGH BRIGHTNESS SYMBOL'
  	  ], 
  	  [
  	   '&#x1f505;', 
  	   'LOW BRIGHTNESS SYMBOL'
  	  ], 
  	  [
  	   '&#x1f50c;', 
  	   'ELECTRIC PLUG'
  	  ], 
  	  [
  	   '&#x1f50b;', 
  	   'BATTERY'
  	  ], 
  	  [
  	   '&#x1f50d;', 
  	   'LEFT-POINTING MAGNIFYING GLASS'
  	  ], 
  	  [
  	   '&#x1f6c1;', 
  	   'BATHTUB'
  	  ], 
  	  [
  	   '&#x1f6c0;', 
  	   'BATH'
  	  ], 
  	  [
  	   '&#x1f6bf;', 
  	   'SHOWER'
  	  ], 
  	  [
  	   '&#x1f6bd;', 
  	   'TOILET'
  	  ], 
  	  [
  	   '&#x1f527;', 
  	   'WRENCH'
  	  ], 
  	  [
  	   '&#x1f529;', 
  	   'NUT AND BOLT'
  	  ], 
  	  [
  	   '&#x1f528;', 
  	   'HAMMER'
  	  ], 
  	  [
  	   '&#x1f6aa;', 
  	   'DOOR'
  	  ], 
  	  [
  	   '&#x1f6ac;', 
  	   'SMOKING SYMBOL'
  	  ], 
  	  [
  	   '&#x1f4a3;', 
  	   'BOMB'
  	  ], 
  	  [
  	   '&#x1f52b;', 
  	   'PISTOL'
  	  ], 
  	  [
  	   '&#x1f52a;', 
  	   'HOCHO'
  	  ], 
  	  [
  	   '&#x1f48a;', 
  	   'PILL'
  	  ], 
  	  [
  	   '&#x1f489;', 
  	   'SYRINGE'
  	  ], 
  	  [
  	   '&#x1f4b0;', 
  	   'MONEY BAG'
  	  ], 
  	  [
  	   '&#x1f4b4;', 
  	   'BANKNOTE WITH YEN SIGN'
  	  ], 
  	  [
  	   '&#x1f4b5;', 
  	   'BANKNOTE WITH DOLLAR SIGN'
  	  ], 
  	  [
  	   '&#x1f4b7;', 
  	   'BANKNOTE WITH POUND SIGN'
  	  ], 
  	  [
  	   '&#x1f4b6;', 
  	   'BANKNOTE WITH EURO SIGN'
  	  ], 
  	  [
  	   '&#x1f4b3;', 
  	   'CREDIT CARD'
  	  ], 
  	  [
  	   '&#x1f4b8;', 
  	   'MONEY WITH WINGS'
  	  ], 
  	  [
  	   '&#x1f4f2;', 
  	   'MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT'
  	  ], 
  	  [
  	   '&#x1f4e7;', 
  	   'E-MAIL SYMBOL'
  	  ], 
  	  [
  	   '&#x1f4e5;', 
  	   'INBOX TRAY'
  	  ], 
  	  [
  	   '&#x1f4e4;', 
  	   'OUTBOX TRAY'
  	  ], 
  	  [
  	   '&#x2709;', 
  	   'ENVELOPE'
  	  ], 
  	  [
  	   '&#x1f4e9;', 
  	   'ENVELOPE WITH DOWNWARDS ARROW ABOVE'
  	  ], 
  	  [
  	   '&#x1f4e8;', 
  	   'INCOMING ENVELOPE'
  	  ], 
  	  [
  	   '&#x1f4ef;', 
  	   'POSTAL HORN'
  	  ], 
  	  [
  	   '&#x1f4eb;', 
  	   'CLOSED MAILBOX WITH RAISED FLAG'
  	  ], 
  	  [
  	   '&#x1f4ea;', 
  	   'CLOSED MAILBOX WITH LOWERED FLAG'
  	  ], 
  	  [
  	   '&#x1f4ec;', 
  	   'OPEN MAILBOX WITH RAISED FLAG'
  	  ], 
  	  [
  	   '&#x1f4ed;', 
  	   'OPEN MAILBOX WITH LOWERED FLAG'
  	  ], 
  	  [
  	   '&#x1f4ee;', 
  	   'POSTBOX'
  	  ], 
  	  [
  	   '&#x1f4e6;', 
  	   'PACKAGE'
  	  ], 
  	  [
  	   '&#x1f4dd;', 
  	   'MEMO'
  	  ], 
  	  [
  	   '&#x1f4c4;', 
  	   'PAGE FACING UP'
  	  ], 
  	  [
  	   '&#x1f4c3;', 
  	   'PAGE WITH CURL'
  	  ], 
  	  [
  	   '&#x1f4d1;', 
  	   'BOOKMARK TABS'
  	  ], 
  	  [
  	   '&#x1f4ca;', 
  	   'BAR CHART'
  	  ], 
  	  [
  	   '&#x1f4c8;', 
  	   'CHART WITH UPWARDS TREND'
  	  ], 
  	  [
  	   '&#x1f4c9;', 
  	   'CHART WITH DOWNWARDS TREND'
  	  ], 
  	  [
  	   '&#x1f4dc;', 
  	   'SCROLL'
  	  ], 
  	  [
  	   '&#x1f4cb;', 
  	   'CLIPBOARD'
  	  ], 
  	  [
  	   '&#x1f4c5;', 
  	   'CALENDAR'
  	  ], 
  	  [
  	   '&#x1f4c6;', 
  	   'TEAR-OFF CALENDAR'
  	  ], 
  	  [
  	   '&#x1f4c7;', 
  	   'CARD INDEX'
  	  ], 
  	  [
  	   '&#x1f4c1;', 
  	   'FILE FOLDER'
  	  ], 
  	  [
  	   '&#x1f4c2;', 
  	   'OPEN FILE FOLDER'
  	  ], 
  	  [
  	   '&#x2702;', 
  	   'BLACK SCISSORS'
  	  ], 
  	  [
  	   '&#x1f4cc;', 
  	   'PUSHPIN'
  	  ], 
  	  [
  	   '&#x1f4ce;', 
  	   'PAPERCLIP'
  	  ], 
  	  [
  	   '&#x2712;', 
  	   'BLACK NIB'
  	  ], 
  	  [
  	   '&#x270f;', 
  	   'PENCIL'
  	  ], 
  	  [
  	   '&#x1f4cf;', 
  	   'STRAIGHT RULER'
  	  ], 
  	  [
  	   '&#x1f4d0;', 
  	   'TRIANGULAR RULER'
  	  ], 
  	  [
  	   '&#x1f4d5;', 
  	   'CLOSED BOOK'
  	  ], 
  	  [
  	   '&#x1f4d7;', 
  	   'GREEN BOOK'
  	  ], 
  	  [
  	   '&#x1f4d8;', 
  	   'BLUE BOOK'
  	  ], 
  	  [
  	   '&#x1f4d9;', 
  	   'ORANGE BOOK'
  	  ], 
  	  [
  	   '&#x1f4d3;', 
  	   'NOTEBOOK'
  	  ], 
  	  [
  	   '&#x1f4d4;', 
  	   'NOTEBOOK WITH DECORATIVE COVER'
  	  ], 
  	  [
  	   '&#x1f4d2;', 
  	   'LEDGER'
  	  ], 
  	  [
  	   '&#x1f4da;', 
  	   'BOOKS'
  	  ], 
  	  [
  	   '&#x1f4d6;', 
  	   'OPEN BOOK'
  	  ], 
  	  [
  	   '&#x1f516;', 
  	   'BOOKMARK'
  	  ], 
  	  [
  	   '&#x1f4db;', 
  	   'NAME BADGE'
  	  ], 
  	  [
  	   '&#x1f52c;', 
  	   'MICROSCOPE'
  	  ], 
  	  [
  	   '&#x1f52d;', 
  	   'TELESCOPE'
  	  ], 
  	  [
  	   '&#x1f4f0;', 
  	   'NEWSPAPER'
  	  ], 
  	  [
  	   '&#x1f3a8;', 
  	   'ARTIST PALETTE'
  	  ], 
  	  [
  	   '&#x1f3ac;', 
  	   'CLAPPER BOARD'
  	  ], 
  	  [
  	   '&#x1f3a4;', 
  	   'MICROPHONE'
  	  ], 
  	  [
  	   '&#x1f3a7;', 
  	   'HEADPHONE'
  	  ], 
  	  [
  	   '&#x1f3bc;', 
  	   'MUSICAL SCORE'
  	  ], 
  	  [
  	   '&#x1f3b5;', 
  	   'MUSICAL NOTE'
  	  ], 
  	  [
  	   '&#x1f3b6;', 
  	   'MULTIPLE MUSICAL NOTES'
  	  ], 
  	  [
  	   '&#x1f3b9;', 
  	   'MUSICAL KEYBOARD'
  	  ], 
  	  [
  	   '&#x1f3bb;', 
  	   'VIOLIN'
  	  ], 
  	  [
  	   '&#x1f3ba;', 
  	   'TRUMPET'
  	  ], 
  	  [
  	   '&#x1f3b7;', 
  	   'SAXOPHONE'
  	  ], 
  	  [
  	   '&#x1f3b8;', 
  	   'GUITAR'
  	  ], 
  	  [
  	   '&#x1f47e;', 
  	   'ALIEN MONSTER'
  	  ], 
  	  [
  	   '&#x1f3ae;', 
  	   'VIDEO GAME'
  	  ], 
  	  [
  	   '&#x1f0cf;', 
  	   'PLAYING CARD BLACK JOKER'
  	  ], 
  	  [
  	   '&#x1f3b4;', 
  	   'FLOWER PLAYING CARDS'
  	  ], 
  	  [
  	   '&#x1f004;', 
  	   'MAHJONG TILE RED DRAGON'
  	  ], 
  	  [
  	   '&#x1f3b2;', 
  	   'GAME DIE'
  	  ], 
  	  [
  	   '&#x1f3af;', 
  	   'DIRECT HIT'
  	  ], 
  	  [
  	   '&#x1f3c8;', 
  	   'AMERICAN FOOTBALL'
  	  ], 
  	  [
  	   '&#x1f3c0;', 
  	   'BASKETBALL AND HOOP'
  	  ], 
  	  [
  	   '&#x26bd;', 
  	   'SOCCER BALL'
  	  ], 
  	  [
  	   '&#x26be;', 
  	   'BASEBALL'
  	  ], 
  	  [
  	   '&#x1f3be;', 
  	   'TENNIS RACQUET AND BALL'
  	  ], 
  	  [
  	   '&#x1f3b1;', 
  	   'BILLIARDS'
  	  ], 
  	  [
  	   '&#x1f3c9;', 
  	   'RUGBY FOOTBALL'
  	  ], 
  	  [
  	   '&#x1f3b3;', 
  	   'BOWLING'
  	  ], 
  	  [
  	   '&#x26f3;', 
  	   'FLAG IN HOLE'
  	  ], 
  	  [
  	   '&#x1f6b5;', 
  	   'MOUNTAIN BICYCLIST'
  	  ], 
  	  [
  	   '&#x1f6b4;', 
  	   'BICYCLIST'
  	  ], 
  	  [
  	   '&#x1f3c1;', 
  	   'CHEQUERED FLAG'
  	  ], 
  	  [
  	   '&#x1f3c7;', 
  	   'HORSE RACING'
  	  ], 
  	  [
  	   '&#x1f3c6;', 
  	   'TROPHY'
  	  ], 
  	  [
  	   '&#x1f3bf;', 
  	   'SKI AND SKI BOOT'
  	  ], 
  	  [
  	   '&#x1f3c2;', 
  	   'SNOWBOARDER'
  	  ], 
  	  [
  	   '&#x1f3ca;', 
  	   'SWIMMER'
  	  ], 
  	  [
  	   '&#x1f3c4;', 
  	   'SURFER'
  	  ], 
  	  [
  	   '&#x1f3a3;', 
  	   'FISHING POLE AND FISH'
  	  ], 
  	  [
  	   '&#x2615;', 
  	   'HOT BEVERAGE'
  	  ], 
  	  [
  	   '&#x1f375;', 
  	   'TEACUP WITHOUT HANDLE'
  	  ], 
  	  [
  	   '&#x1f376;', 
  	   'SAKE BOTTLE AND CUP'
  	  ], 
  	  [
  	   '&#x1f37c;', 
  	   'BABY BOTTLE'
  	  ], 
  	  [
  	   '&#x1f37a;', 
  	   'BEER MUG'
  	  ], 
  	  [
  	   '&#x1f37b;', 
  	   'CLINKING BEER MUGS'
  	  ], 
  	  [
  	   '&#x1f378;', 
  	   'COCKTAIL GLASS'
  	  ], 
  	  [
  	   '&#x1f379;', 
  	   'TROPICAL DRINK'
  	  ], 
  	  [
  	   '&#x1f377;', 
  	   'WINE GLASS'
  	  ], 
  	  [
  	   '&#x1f374;', 
  	   'FORK AND KNIFE'
  	  ], 
  	  [
  	   '&#x1f355;', 
  	   'SLICE OF PIZZA'
  	  ], 
  	  [
  	   '&#x1f354;', 
  	   'HAMBURGER'
  	  ], 
  	  [
  	   '&#x1f35f;', 
  	   'FRENCH FRIES'
  	  ], 
  	  [
  	   '&#x1f357;', 
  	   'POULTRY LEG'
  	  ], 
  	  [
  	   '&#x1f356;', 
  	   'MEAT ON BONE'
  	  ], 
  	  [
  	   '&#x1f35d;', 
  	   'SPAGHETTI'
  	  ], 
  	  [
  	   '&#x1f35b;', 
  	   'CURRY AND RICE'
  	  ], 
  	  [
  	   '&#x1f364;', 
  	   'FRIED SHRIMP'
  	  ], 
  	  [
  	   '&#x1f371;', 
  	   'BENTO BOX'
  	  ], 
  	  [
  	   '&#x1f363;', 
  	   'SUSHI'
  	  ], 
  	  [
  	   '&#x1f365;', 
  	   'FISH CAKE WITH SWIRL DESIGN'
  	  ], 
  	  [
  	   '&#x1f359;', 
  	   'RICE BALL'
  	  ], 
  	  [
  	   '&#x1f358;', 
  	   'RICE CRACKER'
  	  ], 
  	  [
  	   '&#x1f35a;', 
  	   'COOKED RICE'
  	  ], 
  	  [
  	   '&#x1f35c;', 
  	   'STEAMING BOWL'
  	  ], 
  	  [
  	   '&#x1f372;', 
  	   'POT OF FOOD'
  	  ], 
  	  [
  	   '&#x1f362;', 
  	   'ODEN'
  	  ], 
  	  [
  	   '&#x1f361;', 
  	   'DANGO'
  	  ], 
  	  [
  	   '&#x1f373;', 
  	   'COOKING'
  	  ], 
  	  [
  	   '&#x1f35e;', 
  	   'BREAD'
  	  ], 
  	  [
  	   '&#x1f369;', 
  	   'DOUGHNUT'
  	  ], 
  	  [
  	   '&#x1f36e;', 
  	   'CUSTARD'
  	  ], 
  	  [
  	   '&#x1f366;', 
  	   'SOFT ICE CREAM'
  	  ], 
  	  [
  	   '&#x1f368;', 
  	   'ICE CREAM'
  	  ], 
  	  [
  	   '&#x1f367;', 
  	   'SHAVED ICE'
  	  ], 
  	  [
  	   '&#x1f382;', 
  	   'BIRTHDAY CAKE'
  	  ], 
  	  [
  	   '&#x1f370;', 
  	   'SHORTCAKE'
  	  ], 
  	  [
  	   '&#x1f36a;', 
  	   'COOKIE'
  	  ], 
  	  [
  	   '&#x1f36b;', 
  	   'CHOCOLATE BAR'
  	  ], 
  	  [
  	   '&#x1f36c;', 
  	   'CANDY'
  	  ], 
  	  [
  	   '&#x1f36d;', 
  	   'LOLLIPOP'
  	  ], 
  	  [
  	   '&#x1f36f;', 
  	   'HONEY POT'
  	  ], 
  	  [
  	   '&#x1f34e;', 
  	   'RED APPLE'
  	  ], 
  	  [
  	   '&#x1f34f;', 
  	   'GREEN APPLE'
  	  ], 
  	  [
  	   '&#x1f34a;', 
  	   'TANGERINE'
  	  ], 
  	  [
  	   '&#x1f34b;', 
  	   'LEMON'
  	  ], 
  	  [
  	   '&#x1f352;', 
  	   'CHERRIES'
  	  ], 
  	  [
  	   '&#x1f347;', 
  	   'GRAPES'
  	  ], 
  	  [
  	   '&#x1f349;', 
  	   'WATERMELON'
  	  ], 
  	  [
  	   '&#x1f353;', 
  	   'STRAWBERRY'
  	  ], 
  	  [
  	   '&#x1f351;', 
  	   'PEACH'
  	  ], 
  	  [
  	   '&#x1f348;', 
  	   'MELON'
  	  ], 
  	  [
  	   '&#x1f34c;', 
  	   'BANANA'
  	  ], 
  	  [
  	   '&#x1f350;', 
  	   'PEAR'
  	  ], 
  	  [
  	   '&#x1f34d;', 
  	   'PINEAPPLE'
  	  ], 
  	  [
  	   '&#x1f360;', 
  	   'ROASTED SWEET POTATO'
  	  ], 
  	  [
  	   '&#x1f346;', 
  	   'AUBERGINE'
  	  ], 
  	  [
  	   '&#x1f345;', 
  	   'TOMATO'
  	  ], 
  	  [
  	   '&#x1f33d;', 
  	   'EAR OF MAIZE'
  	  ],
  	  [
  	   '&#x1f3e0;', 
  	   'HOUSE BUILDING'
  	  ], 
  	  [
  	   '&#x1f3e1;', 
  	   'HOUSE WITH GARDEN'
  	  ], 
  	  [
  	   '&#x1f3eb;', 
  	   'SCHOOL'
  	  ], 
  	  [
  	   '&#x1f3e2;', 
  	   'OFFICE BUILDING'
  	  ], 
  	  [
  	   '&#x1f3e3;', 
  	   'JAPANESE POST OFFICE'
  	  ], 
  	  [
  	   '&#x1f3e5;', 
  	   'HOSPITAL'
  	  ], 
  	  [
  	   '&#x1f3e6;', 
  	   'BANK'
  	  ], 
  	  [
  	   '&#x1f3ea;', 
  	   'CONVENIENCE STORE'
  	  ], 
  	  [
  	   '&#x1f3e9;', 
  	   'LOVE HOTEL'
  	  ], 
  	  [
  	   '&#x1f3e8;', 
  	   'HOTEL'
  	  ], 
  	  [
  	   '&#x1f492;', 
  	   'WEDDING'
  	  ], 
  	  [
  	   '&#x26ea;', 
  	   'CHURCH'
  	  ], 
  	  [
  	   '&#x1f3ec;', 
  	   'DEPARTMENT STORE'
  	  ], 
  	  [
  	   '&#x1f3e4;', 
  	   'EUROPEAN POST OFFICE'
  	  ], 
  	  [
  	   '&#x1f307;', 
  	   'SUNSET OVER BUILDINGS'
  	  ], 
  	  [
  	   '&#x1f306;', 
  	   'CITYSCAPE AT DUSK'
  	  ], 
  	  [
  	   '&#x1f3ef;', 
  	   'JAPANESE CASTLE'
  	  ], 
  	  [
  	   '&#x1f3f0;', 
  	   'EUROPEAN CASTLE'
  	  ], 
  	  [
  	   '&#x26fa;', 
  	   'TENT'
  	  ], 
  	  [
  	   '&#x1f3ed;', 
  	   'FACTORY'
  	  ], 
  	  [
  	   '&#x1f5fc;', 
  	   'TOKYO TOWER'
  	  ], 
  	  [
  	   '&#x1f5fe;', 
  	   'SILHOUETTE OF JAPAN'
  	  ], 
  	  [
  	   '&#x1f5fb;', 
  	   'MOUNT FUJI'
  	  ], 
  	  [
  	   '&#x1f304;', 
  	   'SUNRISE OVER MOUNTAINS'
  	  ], 
  	  [
  	   '&#x1f305;', 
  	   'SUNRISE'
  	  ], 
  	  [
  	   '&#x1f303;', 
  	   'NIGHT WITH STARS'
  	  ], 
  	  [
  	   '&#x1f5fd;', 
  	   'STATUE OF LIBERTY'
  	  ], 
  	  [
  	   '&#x1f309;', 
  	   'BRIDGE AT NIGHT'
  	  ], 
  	  [
  	   '&#x1f3a0;', 
  	   'CAROUSEL HORSE'
  	  ], 
  	  [
  	   '&#x1f3a1;', 
  	   'FERRIS WHEEL'
  	  ], 
  	  [
  	   '&#x26f2;', 
  	   'FOUNTAIN'
  	  ], 
  	  [
  	   '&#x1f3a2;', 
  	   'ROLLER COASTER'
  	  ], 
  	  [
  	   '&#x1f6a2;', 
  	   'SHIP'
  	  ], 
  	  [
  	   '&#x26f5;', 
  	   'SAILBOAT'
  	  ], 
  	  [
  	   '&#x1f6a4;', 
  	   'SPEEDBOAT'
  	  ], 
  	  [
  	   '&#x1f6a3;', 
  	   'ROWBOAT'
  	  ], 
  	  [
  	   '&#x2693;', 
  	   'ANCHOR'
  	  ], 
  	  [
  	   '&#x1f680;', 
  	   'ROCKET'
  	  ], 
  	  [
  	   '&#x2708;', 
  	   'AIRPLANE'
  	  ], 
  	  [
  	   '&#x1f4ba;', 
  	   'SEAT'
  	  ], 
  	  [
  	   '&#x1f681;', 
  	   'HELICOPTER'
  	  ], 
  	  [
  	   '&#x1f682;', 
  	   'STEAM LOCOMOTIVE'
  	  ], 
  	  [
  	   '&#x1f68a;', 
  	   'TRAM'
  	  ], 
  	  [
  	   '&#x1f689;', 
  	   'STATION'
  	  ], 
  	  [
  	   '&#x1f69e;', 
  	   'MOUNTAIN RAILWAY'
  	  ], 
  	  [
  	   '&#x1f686;', 
  	   'TRAIN'
  	  ], 
  	  [
  	   '&#x1f684;', 
  	   'HIGH-SPEED TRAIN'
  	  ], 
  	  [
  	   '&#x1f685;', 
  	   'HIGH-SPEED TRAIN WITH BULLET NOSE'
  	  ], 
  	  [
  	   '&#x1f688;', 
  	   'LIGHT RAIL'
  	  ], 
  	  [
  	   '&#x1f687;', 
  	   'METRO'
  	  ], 
  	  [
  	   '&#x1f69d;', 
  	   'MONORAIL'
  	  ], 
  	  [
  	   '&#x1f68b;', 
  	   'TRAM CAR'
  	  ], 
  	  [
  	   '&#x1f683;', 
  	   'RAILWAY CAR'
  	  ], 
  	  [
  	   '&#x1f68e;', 
  	   'TROLLEYBUS'
  	  ], 
  	  [
  	   '&#x1f68c;', 
  	   'BUS'
  	  ], 
  	  [
  	   '&#x1f68d;', 
  	   'ONCOMING BUS'
  	  ], 
  	  [
  	   '&#x1f699;', 
  	   'RECREATIONAL VEHICLE'
  	  ], 
  	  [
  	   '&#x1f698;', 
  	   'ONCOMING AUTOMOBILE'
  	  ], 
  	  [
  	   '&#x1f697;', 
  	   'AUTOMOBILE'
  	  ], 
  	  [
  	   '&#x1f695;', 
  	   'TAXI'
  	  ], 
  	  [
  	   '&#x1f696;', 
  	   'ONCOMING TAXI'
  	  ], 
  	  [
  	   '&#x1f69b;', 
  	   'ARTICULATED LORRY'
  	  ], 
  	  [
  	   '&#x1f69a;', 
  	   'DELIVERY TRUCK'
  	  ], 
  	  [
  	   '&#x1f6a8;', 
  	   'POLICE CARS REVOLVING LIGHT'
  	  ], 
  	  [
  	   '&#x1f693;', 
  	   'POLICE CAR'
  	  ], 
  	  [
  	   '&#x1f694;', 
  	   'ONCOMING POLICE CAR'
  	  ], 
  	  [
  	   '&#x1f692;', 
  	   'FIRE ENGINE'
  	  ], 
  	  [
  	   '&#x1f691;', 
  	   'AMBULANCE'
  	  ], 
  	  [
  	   '&#x1f690;', 
  	   'MINIBUS'
  	  ], 
  	  [
  	   '&#x1f6b2;', 
  	   'BICYCLE'
  	  ], 
  	  [
  	   '&#x1f6a1;', 
  	   'AERIAL TRAMWAY'
  	  ], 
  	  [
  	   '&#x1f69f;', 
  	   'SUSPENSION RAILWAY'
  	  ], 
  	  [
  	   '&#x1f6a0;', 
  	   'MOUNTAIN CABLEWAY'
  	  ], 
  	  [
  	   '&#x1f69c;', 
  	   'TRACTOR'
  	  ], 
  	  [
  	   '&#x1f488;', 
  	   'BARBER POLE'
  	  ], 
  	  [
  	   '&#x1f68f;', 
  	   'BUS STOP'
  	  ], 
  	  [
  	   '&#x1f3ab;', 
  	   'TICKET'
  	  ], 
  	  [
  	   '&#x1f6a6;', 
  	   'VERTICAL TRAFFIC LIGHT'
  	  ], 
  	  [
  	   '&#x1f6a5;', 
  	   'HORIZONTAL TRAFFIC LIGHT'
  	  ], 
  	  [
  	   '&#x26a0;', 
  	   'WARNING SIGN'
  	  ], 
  	  [
  	   '&#x1f6a7;', 
  	   'CONSTRUCTION SIGN'
  	  ], 
  	  [
  	   '&#x1f530;', 
  	   'JAPANESE SYMBOL FOR BEGINNER'
  	  ], 
  	  [
  	   '&#x26fd;', 
  	   'FUEL PUMP'
  	  ], 
  	  [
  	   '&#x1f3ee;', 
  	   'IZAKAYA LANTERN'
  	  ], 
  	  [
  	   '&#x1f3b0;', 
  	   'SLOT MACHINE'
  	  ], 
  	  [
  	   '&#x2668;', 
  	   'HOT SPRINGS'
  	  ], 
  	  [
  	   '&#x1f5ff;', 
  	   'MOYAI'
  	  ], 
  	  [
  	   '&#x1f3aa;', 
  	   'CIRCUS TENT'
  	  ], 
  	  [
  	   '&#x1f3ad;', 
  	   'PERFORMING ARTS'
  	  ], 
  	  [
  	   '&#x1f4cd;', 
  	   'ROUND PUSHPIN'
  	  ], 
  	  [
  	   '&#x1f6a9;', 
  	   'TRIANGULAR FLAG ON POST'
  	  ], 
  	  [
  	   '&#x1f1ef;&#x1f1f5;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS JP'
  	  ], 
  	  [
  	   '&#x1f1f0;&#x1f1f7;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS KR'
  	  ], 
  	  [
  	   '&#x1f1e9;&#x1f1ea;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS DE'
  	  ], 
  	  [
  	   '&#x1f1e8;&#x1f1f3;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS CN'
  	  ], 
  	  [
  	   '&#x1f1fa;&#x1f1f8;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS US'
  	  ], 
  	  [
  	   '&#x1f1eb;&#x1f1f7;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS FR'
  	  ], 
  	  [
  	   '&#x1f1ea;&#x1f1f8;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS ES'
  	  ], 
  	  [
  	   '&#x1f1ee;&#x1f1f9;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS IT'
  	  ], 
  	  [
  	   '&#x1f1f7;&#x1f1fa;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS RU'
  	  ], 
  	  [
  	   '&#x1f1ec;&#x1f1e7;', 
  	   'REGIONAL INDICATOR SYMBOL LETTERS GB'
  	  ],
  	  [
  	   '&#x1f604;', 
  	   'SMILING FACE WITH OPEN MOUTH AND SMILING EYES'
  	  ], 
  	  [
  	   '&#x1f603;', 
  	   'SMILING FACE WITH OPEN MOUTH'
  	  ], 
  	  [
  	   '&#x1f600;', 
  	   'GRINNING FACE'
  	  ], 
  	  [
  	   '&#x1f60a;', 
  	   'SMILING FACE WITH SMILING EYES'
  	  ], 
  	  [
  	   '&#x263a;', 
  	   'WHITE SMILING FACE'
  	  ], 
  	  [
  	   '&#x1f609;', 
  	   'WINKING FACE'
  	  ], 
  	  [
  	   '&#x1f60d;', 
  	   'SMILING FACE WITH HEART-SHAPED EYES'
  	  ], 
  	  [
  	   '&#x1f618;', 
  	   'FACE THROWING A KISS'
  	  ], 
  	  [
  	   '&#x1f61a;', 
  	   'KISSING FACE WITH CLOSED EYES'
  	  ], 
  	  [
  	   '&#x1f617;', 
  	   'KISSING FACE'
  	  ], 
  	  [
  	   '&#x1f619;', 
  	   'KISSING FACE WITH SMILING EYES'
  	  ], 
  	  [
  	   '&#x1f61c;', 
  	   'FACE WITH STUCK-OUT TONGUE AND WINKING EYE'
  	  ], 
  	  [
  	   '&#x1f61d;', 
  	   'FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES'
  	  ], 
  	  [
  	   '&#x1f61b;', 
  	   'FACE WITH STUCK-OUT TONGUE'
  	  ], 
  	  [
  	   '&#x1f633;', 
  	   'FLUSHED FACE'
  	  ], 
  	  [
  	   '&#x1f601;', 
  	   'GRINNING FACE WITH SMILING EYES'
  	  ], 
  	  [
  	   '&#x1f614;', 
  	   'PENSIVE FACE'
  	  ], 
  	  [
  	   '&#x1f60c;', 
  	   'RELIEVED FACE'
  	  ], 
  	  [
  	   '&#x1f612;', 
  	   'UNAMUSED FACE'
  	  ], 
  	  [
  	   '&#x1f61e;', 
  	   'DISAPPOINTED FACE'
  	  ], 
  	  [
  	   '&#x1f623;', 
  	   'PERSEVERING FACE'
  	  ], 
  	  [
  	   '&#x1f622;', 
  	   'CRYING FACE'
  	  ], 
  	  [
  	   '&#x1f602;', 
  	   'FACE WITH TEARS OF JOY'
  	  ], 
  	  [
  	   '&#x1f62d;', 
  	   'LOUDLY CRYING FACE'
  	  ], 
  	  [
  	   '&#x1f62a;', 
  	   'SLEEPY FACE'
  	  ], 
  	  [
  	   '&#x1f625;', 
  	   'DISAPPOINTED BUT RELIEVED FACE'
  	  ], 
  	  [
  	   '&#x1f630;', 
  	   'FACE WITH OPEN MOUTH AND COLD SWEAT'
  	  ], 
  	  [
  	   '&#x1f605;', 
  	   'SMILING FACE WITH OPEN MOUTH AND COLD SWEAT'
  	  ], 
  	  [
  	   '&#x1f613;', 
  	   'FACE WITH COLD SWEAT'
  	  ], 
  	  [
  	   '&#x1f629;', 
  	   'WEARY FACE'
  	  ], 
  	  [
  	   '&#x1f62b;', 
  	   'TIRED FACE'
  	  ], 
  	  [
  	   '&#x1f628;', 
  	   'FEARFUL FACE'
  	  ], 
  	  [
  	   '&#x1f631;', 
  	   'FACE SCREAMING IN FEAR'
  	  ], 
  	  [
  	   '&#x1f620;', 
  	   'ANGRY FACE'
  	  ], 
  	  [
  	   '&#x1f621;', 
  	   'POUTING FACE'
  	  ], 
  	  [
  	   '&#x1f624;', 
  	   'FACE WITH LOOK OF TRIUMPH'
  	  ], 
  	  [
  	   '&#x1f616;', 
  	   'CONFOUNDED FACE'
  	  ], 
  	  [
  	   '&#x1f606;', 
  	   'SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES'
  	  ], 
  	  [
  	   '&#x1f60b;', 
  	   'FACE SAVOURING DELICIOUS FOOD'
  	  ], 
  	  [
  	   '&#x1f637;', 
  	   'FACE WITH MEDICAL MASK'
  	  ], 
  	  [
  	   '&#x1f60e;', 
  	   'SMILING FACE WITH SUNGLASSES'
  	  ], 
  	  [
  	   '&#x1f634;', 
  	   'SLEEPING FACE'
  	  ], 
  	  [
  	   '&#x1f635;', 
  	   'DIZZY FACE'
  	  ], 
  	  [
  	   '&#x1f632;', 
  	   'ASTONISHED FACE'
  	  ], 
  	  [
  	   '&#x1f61f;', 
  	   'WORRIED FACE'
  	  ], 
  	  [
  	   '&#x1f626;', 
  	   'FROWNING FACE WITH OPEN MOUTH'
  	  ], 
  	  [
  	   '&#x1f627;', 
  	   'ANGUISHED FACE'
  	  ], 
  	  [
  	   '&#x1f608;', 
  	   'SMILING FACE WITH HORNS'
  	  ], 
  	  [
  	   '&#x1f47f;', 
  	   'IMP'
  	  ], 
  	  [
  	   '&#x1f62e;', 
  	   'FACE WITH OPEN MOUTH'
  	  ], 
  	  [
  	   '&#x1f62c;', 
  	   'GRIMACING FACE'
  	  ], 
  	  [
  	   '&#x1f610;', 
  	   'NEUTRAL FACE'
  	  ], 
  	  [
  	   '&#x1f615;', 
  	   'CONFUSED FACE'
  	  ], 
  	  [
  	   '&#x1f62f;', 
  	   'HUSHED FACE'
  	  ], 
  	  [
  	   '&#x1f636;', 
  	   'FACE WITHOUT MOUTH'
  	  ], 
  	  [
  	   '&#x1f607;', 
  	   'SMILING FACE WITH HALO'
  	  ], 
  	  [
  	   '&#x1f60f;', 
  	   'SMIRKING FACE'
  	  ], 
  	  [
  	   '&#x1f611;', 
  	   'EXPRESSIONLESS FACE'
  	  ], 
  	  [
  	   '&#x1f472;', 
  	   'MAN WITH GUA PI MAO'
  	  ], 
  	  [
  	   '&#x1f473;', 
  	   'MAN WITH TURBAN'
  	  ], 
  	  [
  	   '&#x1f46e;', 
  	   'POLICE OFFICER'
  	  ], 
  	  [
  	   '&#x1f477;', 
  	   'CONSTRUCTION WORKER'
  	  ], 
  	  [
  	   '&#x1f482;', 
  	   'GUARDSMAN'
  	  ], 
  	  [
  	   '&#x1f476;', 
  	   'BABY'
  	  ], 
  	  [
  	   '&#x1f466;', 
  	   'BOY'
  	  ], 
  	  [
  	   '&#x1f467;', 
  	   'GIRL'
  	  ], 
  	  [
  	   '&#x1f468;', 
  	   'MAN'
  	  ], 
  	  [
  	   '&#x1f469;', 
  	   'WOMAN'
  	  ], 
  	  [
  	   '&#x1f474;', 
  	   'OLDER MAN'
  	  ], 
  	  [
  	   '&#x1f475;', 
  	   'OLDER WOMAN'
  	  ], 
  	  [
  	   '&#x1f471;', 
  	   'PERSON WITH BLOND HAIR'
  	  ], 
  	  [
  	   '&#x1f47c;', 
  	   'BABY ANGEL'
  	  ], 
  	  [
  	   '&#x1f478;', 
  	   'PRINCESS'
  	  ], 
  	  [
  	   '&#x1f63a;', 
  	   'SMILING CAT FACE WITH OPEN MOUTH'
  	  ], 
  	  [
  	   '&#x1f638;', 
  	   'GRINNING CAT FACE WITH SMILING EYES'
  	  ], 
  	  [
  	   '&#x1f63b;', 
  	   'SMILING CAT FACE WITH HEART-SHAPED EYES'
  	  ], 
  	  [
  	   '&#x1f63d;', 
  	   'KISSING CAT FACE WITH CLOSED EYES'
  	  ], 
  	  [
  	   '&#x1f63c;', 
  	   'CAT FACE WITH WRY SMILE'
  	  ], 
  	  [
  	   '&#x1f640;', 
  	   'WEARY CAT FACE'
  	  ], 
  	  [
  	   '&#x1f63f;', 
  	   'CRYING CAT FACE'
  	  ], 
  	  [
  	   '&#x1f639;', 
  	   'CAT FACE WITH TEARS OF JOY'
  	  ], 
  	  [
  	   '&#x1f63e;', 
  	   'POUTING CAT FACE'
  	  ], 
  	  [
  	   '&#x1f479;', 
  	   'JAPANESE OGRE'
  	  ], 
  	  [
  	   '&#x1f47a;', 
  	   'JAPANESE GOBLIN'
  	  ], 
  	  [
  	   '&#x1f648;', 
  	   'SEE-NO-EVIL MONKEY'
  	  ], 
  	  [
  	   '&#x1f649;', 
  	   'HEAR-NO-EVIL MONKEY'
  	  ], 
  	  [
  	   '&#x1f64a;', 
  	   'SPEAK-NO-EVIL MONKEY'
  	  ], 
  	  [
  	   '&#x1f480;', 
  	   'SKULL'
  	  ], 
  	  [
  	   '&#x1f47d;', 
  	   'EXTRATERRESTRIAL ALIEN'
  	  ], 
  	  [
  	   '&#x1f4a9;', 
  	   'PILE OF POO'
  	  ], 
  	  [
  	   '&#x1f525;', 
  	   'FIRE'
  	  ], 
  	  [
  	   '&#x2728;', 
  	   'SPARKLES'
  	  ], 
  	  [
  	   '&#x1f31f;', 
  	   'GLOWING STAR'
  	  ], 
  	  [
  	   '&#x1f4ab;', 
  	   'DIZZY SYMBOL'
  	  ], 
  	  [
  	   '&#x1f4a5;', 
  	   'COLLISION SYMBOL'
  	  ], 
  	  [
  	   '&#x1f4a2;', 
  	   'ANGER SYMBOL'
  	  ], 
  	  [
  	   '&#x1f4a6;', 
  	   'SPLASHING SWEAT SYMBOL'
  	  ], 
  	  [
  	   '&#x1f4a7;', 
  	   'DROPLET'
  	  ], 
  	  [
  	   '&#x1f4a4;', 
  	   'SLEEPING SYMBOL'
  	  ], 
  	  [
  	   '&#x1f4a8;', 
  	   'DASH SYMBOL'
  	  ], 
  	  [
  	   '&#x1f442;', 
  	   'EAR'
  	  ], 
  	  [
  	   '&#x1f440;', 
  	   'EYES'
  	  ], 
  	  [
  	   '&#x1f443;', 
  	   'NOSE'
  	  ], 
  	  [
  	   '&#x1f445;', 
  	   'TONGUE'
  	  ], 
  	  [
  	   '&#x1f444;', 
  	   'MOUTH'
  	  ], 
  	  [
  	   '&#x1f44d;', 
  	   'THUMBS UP SIGN'
  	  ], 
  	  [
  	   '&#x1f44e;', 
  	   'THUMBS DOWN SIGN'
  	  ], 
  	  [
  	   '&#x1f44c;', 
  	   'OK HAND SIGN'
  	  ], 
  	  [
  	   '&#x1f44a;', 
  	   'FISTED HAND SIGN'
  	  ], 
  	  [
  	   '&#x270a;', 
  	   'RAISED FIST'
  	  ], 
  	  [
  	   '&#x270c;', 
  	   'VICTORY HAND'
  	  ], 
  	  [
  	   '&#x1f44b;', 
  	   'WAVING HAND SIGN'
  	  ], 
  	  [
  	   '&#x270b;', 
  	   'RAISED HAND'
  	  ], 
  	  [
  	   '&#x1f450;', 
  	   'OPEN HANDS SIGN'
  	  ], 
  	  [
  	   '&#x1f446;', 
  	   'WHITE UP POINTING BACKHAND INDEX'
  	  ], 
  	  [
  	   '&#x1f447;', 
  	   'WHITE DOWN POINTING BACKHAND INDEX'
  	  ], 
  	  [
  	   '&#x1f449;', 
  	   'WHITE RIGHT POINTING BACKHAND INDEX'
  	  ], 
  	  [
  	   '&#x1f448;', 
  	   'WHITE LEFT POINTING BACKHAND INDEX'
  	  ], 
  	  [
  	   '&#x1f64c;', 
  	   'PERSON RAISING BOTH HANDS IN CELEBRATION'
  	  ], 
  	  [
  	   '&#x1f64f;', 
  	   'PERSON WITH FOLDED HANDS'
  	  ], 
  	  [
  	   '&#x261d;', 
  	   'WHITE UP POINTING INDEX'
  	  ], 
  	  [
  	   '&#x1f44f;', 
  	   'CLAPPING HANDS SIGN'
  	  ], 
  	  [
  	   '&#x1f4aa;', 
  	   'FLEXED BICEPS'
  	  ], 
  	  [
  	   '&#x1f6b6;', 
  	   'PEDESTRIAN'
  	  ], 
  	  [
  	   '&#x1f3c3;', 
  	   'RUNNER'
  	  ], 
  	  [
  	   '&#x1f483;', 
  	   'DANCER'
  	  ], 
  	  [
  	   '&#x1f46b;', 
  	   'MAN AND WOMAN HOLDING HANDS'
  	  ], 
  	  [
  	   '&#x1f46a;', 
  	   'FAMILY'
  	  ], 
  	  [
  	   '&#x1f46c;', 
  	   'TWO MEN HOLDING HANDS'
  	  ], 
  	  [
  	   '&#x1f46d;', 
  	   'TWO WOMEN HOLDING HANDS'
  	  ], 
  	  [
  	   '&#x1f48f;', 
  	   'KISS'
  	  ], 
  	  [
  	   '&#x1f491;', 
  	   'COUPLE WITH HEART'
  	  ], 
  	  [
  	   '&#x1f46f;', 
  	   'WOMAN WITH BUNNY EARS'
  	  ], 
  	  [
  	   '&#x1f646;', 
  	   'FACE WITH OK GESTURE'
  	  ], 
  	  [
  	   '&#x1f645;', 
  	   'FACE WITH NO GOOD GESTURE'
  	  ], 
  	  [
  	   '&#x1f481;', 
  	   'INFORMATION DESK PERSON'
  	  ], 
  	  [
  	   '&#x1f64b;', 
  	   'HAPPY PERSON RAISING ONE HAND'
  	  ], 
  	  [
  	   '&#x1f486;', 
  	   'FACE MASSAGE'
  	  ], 
  	  [
  	   '&#x1f487;', 
  	   'HAIRCUT'
  	  ], 
  	  [
  	   '&#x1f485;', 
  	   'NAIL POLISH'
  	  ], 
  	  [
  	   '&#x1f470;', 
  	   'BRIDE WITH VEIL'
  	  ], 
  	  [
  	   '&#x1f64e;', 
  	   'PERSON WITH POUTING FACE'
  	  ], 
  	  [
  	   '&#x1f64d;', 
  	   'PERSON FROWNING'
  	  ], 
  	  [
  	   '&#x1f647;', 
  	   'PERSON BOWING DEEPLY'
  	  ], 
  	  [
  	   '&#x1f3a9;', 
  	   'TOP HAT'
  	  ], 
  	  [
  	   '&#x1f451;', 
  	   'CROWN'
  	  ], 
  	  [
  	   '&#x1f452;', 
  	   'WOMANS HAT'
  	  ], 
  	  [
  	   '&#x1f45f;', 
  	   'ATHLETIC SHOE'
  	  ], 
  	  [
  	   '&#x1f45e;', 
  	   'MANS SHOE'
  	  ], 
  	  [
  	   '&#x1f461;', 
  	   'WOMANS SANDAL'
  	  ], 
  	  [
  	   '&#x1f460;', 
  	   'HIGH-HEELED SHOE'
  	  ], 
  	  [
  	   '&#x1f462;', 
  	   'WOMANS BOOTS'
  	  ], 
  	  [
  	   '&#x1f455;', 
  	   'T-SHIRT'
  	  ], 
  	  [
  	   '&#x1f454;', 
  	   'NECKTIE'
  	  ], 
  	  [
  	   '&#x1f45a;', 
  	   'WOMANS CLOTHES'
  	  ], 
  	  [
  	   '&#x1f457;', 
  	   'DRESS'
  	  ], 
  	  [
  	   '&#x1f3bd;', 
  	   'RUNNING SHIRT WITH SASH'
  	  ], 
  	  [
  	   '&#x1f456;', 
  	   'JEANS'
  	  ], 
  	  [
  	   '&#x1f458;', 
  	   'KIMONO'
  	  ], 
  	  [
  	   '&#x1f459;', 
  	   'BIKINI'
  	  ], 
  	  [
  	   '&#x1f4bc;', 
  	   'BRIEFCASE'
  	  ], 
  	  [
  	   '&#x1f45c;', 
  	   'HANDBAG'
  	  ], 
  	  [
  	   '&#x1f45d;', 
  	   'POUCH'
  	  ], 
  	  [
  	   '&#x1f45b;', 
  	   'PURSE'
  	  ], 
  	  [
  	   '&#x1f453;', 
  	   'EYEGLASSES'
  	  ], 
  	  [
  	   '&#x1f380;', 
  	   'RIBBON'
  	  ], 
  	  [
  	   '&#x1f302;', 
  	   'CLOSED UMBRELLA'
  	  ], 
  	  [
  	   '&#x1f484;', 
  	   'LIPSTICK'
  	  ], 
  	  [
  	   '&#x1f49b;', 
  	   'YELLOW HEART'
  	  ], 
  	  [
  	   '&#x1f499;', 
  	   'BLUE HEART'
  	  ], 
  	  [
  	   '&#x1f49c;', 
  	   'PURPLE HEART'
  	  ], 
  	  [
  	   '&#x1f49a;', 
  	   'GREEN HEART'
  	  ], 
  	  [
  	   '&#x2764;', 
  	   'HEAVY BLACK HEART'
  	  ], 
  	  [
  	   '&#x1f494;', 
  	   'BROKEN HEART'
  	  ], 
  	  [
  	   '&#x1f497;', 
  	   'GROWING HEART'
  	  ], 
  	  [
  	   '&#x1f493;', 
  	   'BEATING HEART'
  	  ], 
  	  [
  	   '&#x1f495;', 
  	   'TWO HEARTS'
  	  ], 
  	  [
  	   '&#x1f496;', 
  	   'SPARKLING HEART'
  	  ], 
  	  [
  	   '&#x1f49e;', 
  	   'REVOLVING HEARTS'
  	  ], 
  	  [
  	   '&#x1f498;', 
  	   'HEART WITH ARROW'
  	  ], 
  	  [
  	   '&#x1f48c;', 
  	   'LOVE LETTER'
  	  ], 
  	  [
  	   '&#x1f48b;', 
  	   'KISS MARK'
  	  ], 
  	  [
  	   '&#x1f48d;', 
  	   'RING'
  	  ], 
  	  [
  	   '&#x1f48e;', 
  	   'GEM STONE'
  	  ], 
  	  [
  	   '&#x1f464;', 
  	   'BUST IN SILHOUETTE'
  	  ], 
  	  [
  	   '&#x1f465;', 
  	   'BUSTS IN SILHOUETTE'
  	  ], 
  	  [
  	   '&#x1f4ac;', 
  	   'SPEECH BALLOON'
  	  ], 
  	  [
  	   '&#x1f463;', 
  	   'FOOTPRINTS'
  	  ], 
  	  [
  	   '&#x1f4ad;', 
  	   'THOUGHT BALLOON'
  	  ]
  	];



  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
})();