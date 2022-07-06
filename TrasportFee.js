function transportFee (shift) {
    if (shift.includes('orning')) {
        return 'R20';
    }   else if (shift.includes('fternoon')) {
        return 'R10';
        }   else if (shift.includes('ight')) {
        return 'Free';
        }
  }