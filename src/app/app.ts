import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import {  AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { Countries } from './Service/countries';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";
import { Checkbox, CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ListboxModule } from 'primeng/listbox';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    FluidModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    FloatLabelModule,
    TextareaModule,
    AutoCompleteModule,
    FormsModule,
    DatePickerModule,
    InputNumberModule,
    SliderModule,
    CheckboxModule,
    RadioButtonModule,
    ListboxModule,
    SelectModule,
    MultiSelectModule,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('new-app');
      autoFilteredValue: any[] = [];
      autoValue: any[] | undefined;
      selectedAutoValue:any = null
      sliderValue:any = null;
      checkboxValue:any = null;
      radioButtonValue:any = null;
      listBoxValue:any = null;
      dropdownmenu:any = null;
      multiselectValue:any = null;



        listboxValues: any[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    
 dropdownMenuValues: any[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    
    multiselectCountries: any[] = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];
      constructor(private _countries:Countries){}
      ngOnInit(): void {
        this._countries.getCountries().then((countries)=>
        {
          console.log(countries);
          this.autoValue=countries;
          
        })
      }

      filterCountry(e:AutoCompleteCompleteEvent)
      {
        const filtered:any[] =[];
        const query = e.query;
        for( let i = 0 ; i<(this.autoValue as any[]).length ; i++){
          const country = (this.autoValue as any[])[i]
          if(country.name.toLowerCase().indexOf(query.toLowerCase())==0)
          {
            filtered.push(country)
          }
        }
        this.autoFilteredValue=filtered;

      }











changeToRtl()
{
  document.documentElement.setAttribute('dir','rtl');
  console.log(document.querySelector('html')?.getAttribute('dir'));
  
}














}
