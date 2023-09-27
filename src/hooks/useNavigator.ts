import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type NestedProps = {
  route: any;
  params?: any;
  nested?: string;
};

type INestedNavigation = (props: NestedProps) => any;

export const useNavigator: INestedNavigation = ({route, nested, params}) => {
  const navigation = useNavigation<any | NativeStackScreenProps<any> | any>();

  return () => {
    navigation.navigate(route, {
      screen: nested,
      params: {...params},
    });
  };
};
