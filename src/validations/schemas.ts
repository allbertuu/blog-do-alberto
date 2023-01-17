import * as Yup from 'yup';

export const SearchFormSchema = Yup.object().shape({
    repository: Yup.string().required(),
});
