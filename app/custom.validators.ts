import {FormControl} from '@angular/forms';
export class CustomValidators{
    static usernameValidator(username:FormControl){
        if(username.value.indexOf(' ')>0){
            return {
                'nospace':'true'
            }
        }else{
            return null;
        }
    }
}