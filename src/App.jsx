import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Stack,
  Divider,
  Button,
  Box,
  Chip,
} from "@mui/material";

export default function App() {
  const subscriptionPlan = [
    {
      id: 2,
      subscriptionLength: "1 Year",
      priceBreakdown: "$5.96X12 months",
      price: "$71.52",
      save: "Save $60",
    },
    {
      id: 3,
      subscriptionLength: "2 Year",
      priceBreakdown: "$3.58X24 months",
      price: "$61.52",
      save: "Save $146",
    },
    {
      id: 4,
      subscriptionLength: "3 Year",
      priceBreakdown: "$2.75X36 months",
      price: "$99.00",
      save: "Save $60",
    },
  ];

  const [formData, setFormData] = useState({
    subscriptionLength: "",
    priceBreakdown: "",
    price: "",
    save: "",
    selectedDomain: "", // New property to store the selected domain
  });

  const [domainName, setDomainName] = useState("");
  const [availableDomains, setAvailableDomains] = useState([]);
  const [showAvailableDomains, setShowAvailableDomains] = useState(false);

  const selectSubscriptionBtn = (selectedSubscription) => {
    setFormData({
      subscriptionLength: selectedSubscription.subscriptionLength,
      priceBreakdown: selectedSubscription.priceBreakdown,
      price: selectedSubscription.price,
      save: selectedSubscription.save,
      selectedDomain: "", // Clear selected domain when changing subscription
    });
  };

  const searchDomainsBtn = () => {
    generateAvailableDomains();
  };

  const generateAvailableDomains = () => {
    if (domainName.length > 0) {
      const extensions = [".com", ".org", ".net", ".biz", ".info"];
      const AvailableDomainsList = extensions.map(
        (extension) => `${domainName}${extension}`
      );
      setAvailableDomains(AvailableDomainsList);
      setShowAvailableDomains(true);
    } else {
      setShowAvailableDomains(false);
    }
  };

  const addToCart = (domain) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDomain: domain,
    }));
  };

  const addOns = [
    {
      id: 1,
      addOnTitle: "Title One",
      addOnDescription:
        "HackAlert is a monitoring service that checks your website daily and immediately notifies you if your website has been hacked or injected with malicious code.",
    },
    {
      id: 2,
      addOnTitle: "Title Two",
      addOnDescription:
        "HackAlert is a monitoring service that checks your website daily and immediately notifies you if your website has been hacked or injected with malicious code.",
    },
    {
      id: 3,
      addOnTitle: "Title Three",
      addOnDescription:
        "HackAlert is a monitoring service that checks your website daily and immediately notifies you if your website has been hacked or injected with malicious code.",
    },
  ];

  return (
    <div className="App">
      <Container>
        <br />
        <br />

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Web Hosting Subscription
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Web Hosting Subscription
          </Typography>
        </Box>

        {subscriptionPlan.map((subscription) => (
          <Card
            key={subscription.id}
            sx={{ boxShadow: 0, mb: 1 }}
            onClick={() => selectSubscriptionBtn(subscription)}
          >
            <CardContent>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1" fontWeight="bold">
                    {subscription.subscriptionLength}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {subscription.priceBreakdown}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    sx={{ textAlign: "right" }}
                  >
                    {subscription.price}
                  </Typography>
                  <Chip
                    label={subscription.save}
                    color="primary"
                    size="small"
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}

        <br />
        <br />

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Create domain name
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Search for a domain or enter one you already own.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", mb: 1 }}>
                  <Box sx={{ flex: 1, mr: 2 }}>
                    <Stack>
                      <TextField
                        onChange={(e) => setDomainName(e.target.value)}
                        value={domainName}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            searchDomainsBtn();
                          }
                        }}
                      />
                    </Stack>
                  </Box>
                  {/* <Button variant="contained" onClick={searchDomainsBtn}>
                    Search Domains
                  </Button> */}
                </Box>
                <Typography mb={2}>
                  Add Domain Privacy to each domain for $14.95 per year. What's
                  this?
                </Typography>

                {showAvailableDomains && (
                  <Box>
                    {availableDomains.map((possibleDomain, index) => (
                      <>
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            padding: "8px 0",
                          }}
                        >
                          <Box sx={{ flex: 1 }}>
                            <Typography>{possibleDomain}</Typography>
                            <Typography>$9.99</Typography>
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Button
                              variant="contained"
                              onClick={() => addToCart(possibleDomain)}
                            >
                              Add to cart
                            </Button>
                          </Box>
                        </Box>
                        <Divider />
                      </>
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <div>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    Your Order
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography>Shared Hosting</Typography>
                      </Box>
                      <Typography>{formData.price}</Typography>
                    </Box>
                    <Typography color="textSecondary">
                      {formData.subscriptionLength} Subscription
                    </Typography>
                  </Box>
                  <Divider />

                  {formData.selectedDomain && (
                    <Box sx={{ my: 2 }}>
                      <Typography mb={1}>{formData.selectedDomain}</Typography>
                      <Divider />
                    </Box>
                  )}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <br />
        <br />

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Add Additional Services
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Enchance your websites with the following
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            {addOns.map((add) => (
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    {add.addOnTitle}
                  </Typography>
                  <Typography variant="body1">
                    {add.addOnDescription}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <div>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    Your Order
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography>Shared Hosting</Typography>
                      </Box>
                      <Typography>{formData.price}</Typography>
                    </Box>
                    <Typography color="textSecondary">
                      {formData.subscriptionLength} Subscription
                    </Typography>
                  </Box>
                  <Divider />

                  {formData.selectedDomain && (
                    <Box sx={{ my: 2 }}>
                      <Typography mb={1}>{formData.selectedDomain}</Typography>
                      <Divider />
                    </Box>
                  )}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <br />
        <br />

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Checkout
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Account, Billing Address, Payment
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Account Information
                </Typography>
                <TextField />
                <TextField />
                <TextField />
                <TextField />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <div>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    Your Order
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography>Shared Hosting</Typography>
                      </Box>
                      <Typography>{formData.price}</Typography>
                    </Box>
                    <Typography color="textSecondary">
                      {formData.subscriptionLength} Subscription
                    </Typography>
                  </Box>
                  <Divider />

                  {formData.selectedDomain && (
                    <Box sx={{ my: 2 }}>
                      <Typography mb={1}>{formData.selectedDomain}</Typography>
                      <Divider />
                    </Box>
                  )}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
