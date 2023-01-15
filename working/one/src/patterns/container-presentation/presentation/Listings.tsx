import withLoader from "../../hoc/withLoader";
import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";

export function Listings(props: any) {
  return (
    <ListingsGrid>
      {props.listings.map((listing: any) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
