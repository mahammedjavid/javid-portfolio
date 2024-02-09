import { DataCollectionFormComponent } from "../shared/components/data-collection-form/data-collection-form.component";

interface DynamicFormFields {
  name: string;
  slag: string;
  isRequired: boolean;
  input_type : string;
  list : any[]
}
interface DataCollectionInput {
  fields: DynamicFormFields[];
  title: string;
  cancel_title: string;
  submit_title: string;
}
interface DataCollectionFormInitialState extends Partial<DataCollectionFormComponent>, DataCollectionInput {
    
}
interface messageType {
  group_id : string;
  message: string,
  user_id : string,
  media_url : string
}

enum connectionOption {
  'C'
}
export { DynamicFormFields , DataCollectionInput , DataCollectionFormInitialState , messageType , connectionOption };
