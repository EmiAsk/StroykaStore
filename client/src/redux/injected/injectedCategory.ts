import { stroykaApi } from '../stroyka.api';
import { ProductModel } from '../../@types/models';

const injectedCategory = stroykaApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategoryItems: builder.query<ProductModel[], string>({
            query: (type) => ({
                url: `products`,
                params: {
                    type: type,
                }
            }),
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Category' as const, id })), 'Category']
                    : ['Category'],
        }),

    }),
    overrideExisting: false,
})

export const {
    useGetCategoryItemsQuery
} = injectedCategory;