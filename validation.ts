//popup
  ngAfterViewInit() {
    setTimeout(() => {
      const nativeEl = this.focusButton?._elementRef?.nativeElement;
      if (nativeEl) {
        nativeEl.focus();
        nativeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  }
4(logic: 'AND' | 'OR' | 'CUSTOM') {
    this.entries.push({
      logic,
      conditions: { column: '', operator: '', value: '', method: '' },
      groups: [],
      selectedMethods: [],
      customLogic: logic === 'CUSTOM' ? '' : undefined,
    });
    setTimeout(() => {
      const nativeEl = this.focusButton?._elementRef?.nativeElement;
      if (nativeEl) {
        nativeEl.focus();
        nativeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  }
  //formcode
    if (!this.form.valid) {
      this.form.markAllAsTouched(); // Optional: highlights all invalid fields
      return; // Stop if form is invalid
    }