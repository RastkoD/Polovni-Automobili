<?php

for($i = 0; $i <= 12; $i++) {
    $output = $i%3;
    $last = $i%2+3;

    switch ($output):
        case 0:
            $ime = 'Milos';
            break;
        case 1:
            $ime = 'Damir';
            break;
        case 2:
            $ime = 'Milica';
            break;
        default:
            $ime = 'Dragana';
    endswitch;

    $broj_oglasa = 'PA' . date('Y');
    $year = 2 . date('d') . $last;
    $l_name = array('M', 'N','O', 'K', 'D', 'L', 'V', 'R', 'T','M', 'N','O');
    $prezime = $l_name[5];
//    foreach ($l_name as $l_namee) {
//       $prezime = $l_namee;
//
//    }

    $korisnik[] = [
        'ime' => $ime,
        'prezime' => $prezime,
        'broj_oglasa' => $broj_oglasa,
        'year' => $year,
        'pol' => 'z'
    ];
}




echo json_encode($korisnik);
