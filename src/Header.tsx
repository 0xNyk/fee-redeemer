
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { EmptyAccounts, TotalRedemptions } from './fee-redeemer';

type HeaderProps = {
  emptyAccounts?: EmptyAccounts;
  totalRedemptions?: TotalRedemptions;
};

export const Header = ({ emptyAccounts, totalRedemptions }: HeaderProps) => {
  return (
    <Grid container direction="row" justifyContent="center" wrap="nowrap">
      <Grid container direction="row" wrap="nowrap">
        {emptyAccounts && (
          <Grid container direction="row" wrap="nowrap">
            <Grid container direction="column">
              <Typography variant="body2" color="textSecondary">
                Empty Accounts
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{
                  fontWeight: 'bold',
                }}
              >
                {`${emptyAccounts?.size}`}
              </Typography>
            </Grid>
            <Grid container direction="column">
              <Typography variant="body2" color="textSecondary">
                You can redeem
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{ fontWeight: 'bold' }}
              >
                {getPriceString(emptyAccounts?.amount)}
              </Typography>
            </Grid>
            <Grid container direction="column">
              <Typography variant="body2" color="textSecondary">
                Total Redemmed
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{
                  fontWeight: 'bold',
                }}
              >
                {totalRedemptions && getPriceString(totalRedemptions?.totalSolRedeemed)}
              </Typography>
            </Grid>
          </Grid>
        )}
        
      </Grid>
    </Grid>
  );
};

const getPriceString = (price: number): string => {
  return `◎ ${price.toFixed(3)}`;
};