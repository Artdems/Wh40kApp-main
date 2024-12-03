import { StyleSheet} from 'react-native';
import theme from './theme'

const labelStyle = StyleSheet.create({
    
    //region Title Size
    Title1: {
        fontSize: theme.size.Title1Size,
        fontWeight : 'bold',
        color: 'black'
    },
    Title2:{
        fontWeight : 'bold',
        color: 'black',
        fontSize: theme.size.Title2Size
    },
    Title3:{
        fontWeight : 'bold',
        color: 'black',
        fontSize: theme.size.Title3Size
    },
    Title4:{
        fontWeight : 'bold',
        color: 'black',
        fontSize: theme.size.Title4Size
    },
    Title5:{
        fontWeight : 'bold',
        color: 'black',
        fontSize: theme.size.Title5Size
    },
    Title6:{
        fontWeight : 'bold',
        color: 'black',
        fontSize: theme.size.Title6Size
    },

    //region Normal Font

            //Title
    LabelTitle:{
        fontSize: theme.size.TitleSize,
        color: 'black',
    },
    LabelTitleWhite:{
        fontSize: theme.size.TitleSize,
        fontWeight: 'bold',
        color: 'white'
     },
     LabelTitleBloodRed:{
        fontSize: theme.size.TitleSize,
        fontWeight: 'bold',
        color: theme.colors.BloodRed
    },

            //Large
    LabelLarge:{
        fontSize: theme.size.LargeSize,
        color: 'black',
    },
    LabelLargeWhite:{
        fontSize: theme.size.LargeSize,
        color: 'white'
    },
    LabelLargeBloodRed:{
        fontSize: theme.size.LargeSize,
        color: theme.colors.BloodRed
    },    
    LabelLargeBoldBloodRed:{
        fontSize: theme.size.LargeSize,
        color: theme.colors.BloodRed,
        fontWeight: 'bold'
    },



            //Medium
    LabelMedium:{
        fontSize: theme.size.MediumSize,
        color: 'black',
    },
    LabelBoldMedium:{
        fontSize: theme.size.MediumSize,
        color: 'black',
        fontWeight : 'bold'
    },
    LabelMediumWhite:{
        fontSize: theme.size.MediumSize,
        color: 'white'
    },    
    LabelBoldMediumWhite:{
        fontSize: theme.size.MediumSize,
        color: 'white',        
        fontWeight : 'bold'
    },
    LabelMediumBloodRed:{
        fontSize: theme.size.MediumSize,
        margin: 0,
        color: theme.colors.BloodRed
    },

            //Normal
    LabelNormal:{
        fontSize: theme.size.NormalSize,
        color: 'black',
    },
    LabelNormalBlod:{
        fontSize: theme.size.NormalSize,
        color: 'black', 
        fontWeight : 'bold'
    },
    LabelNormalWhite:{
        fontSize: theme.size.NormalSize,
        color: 'white'
    },
    LabelNormalBloodRed:{
        fontSize: theme.size.NormalSize,
        color: theme.colors.BloodRed
    },
    LabelNormalGrey:{
        fontSize: theme.size.NormalSize,
        color: 'grey'
    },

            //Small
    LabelSmall:{
        fontSize: theme.size.SmallSize,
        color: 'black',
    },
    LabelSmallBloodRed:{
        color: theme.colors.BloodRed,
        fontSize: theme.size.SmallSize,
    },
    LabelSmallWhite:{
        color: 'white',
        fontSize: theme.size.SmallSize,
    },
    LabelSmallBoldWhite:{      
        color: 'white',
        fontWeight:'bold',
        fontSize: theme.size.SmallSize,
        margin: 0,
    },
    LabelSmallGrey:{
        fontSize: theme.size.SmallSize,        
        color: theme.colors.DarkGrey
    },

            //ExtraSmall-->
    LabelExtraSmall:{
        fontSize: theme.size.ExtraSmallSize,
        color: 'black',
    },
    LabelExtraSmallBloodRed:{
        color: theme.colors.BloodRed,
        fontSize: theme.size.ExtraSmallSize,
    },
    LabelExtraSmallWhite:{
        color: 'white',
        fontSize: theme.size.ExtraSmallSize,
    },
})

export default labelStyle;