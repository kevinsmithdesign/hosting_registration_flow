import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";

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
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export default function App() {
  // const navigate = useNavigate();
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
      selectedSubscriptionId: selectedSubscription.id, // Update the selected subscription ID
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

  const [addDomainPrivacy, setAddDomainPrivacy] = useState(false);

  const handleAddDomainPrivacyChange = (event) => {
    setAddDomainPrivacy(event.target.checked);
  };

  return (
    <div className="App">
      <Box sx={{ background: "#1976d2", height: "60px" }}></Box>
      <Container>
        <br />
        <br />

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold">
                      Web Hosting Subscription
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Web Hosting Subscription
                    </Typography>
                  </Box>
                  <Box mb={3}>
                    {subscriptionPlan.map((subscription) => (
                      <Card
                        key={subscription.id}
                        sx={{
                          boxShadow: 0,
                          borderRadius: 0,
                          cursor: "pointer",
                          maxWidth: "480px",
                          margin: "auto",
                          backgroundColor:
                            formData.selectedSubscriptionId === subscription.id
                              ? "#eee"
                              : "white",
                        }}
                        onClick={() => selectSubscriptionBtn(subscription)}
                      >
                        <CardContent>
                          <Box sx={{ display: "flex" }}>
                            <Radio
                              checked={
                                formData.selectedSubscriptionId ===
                                subscription.id
                              }
                            />
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
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <InfoIcon color="info" sx={{ mr: 1 }} />
                      <Typography>
                        Plan auto-renews January 12, 2022 at $99.00 a year
                      </Typography>
                    </Box>
                    <Link
                      to="/create-domain"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained" color="primary">
                        Continue
                      </Button>
                    </Link>
                    <Box sx={{ maxWidth: "480px" }}>
                      <Typography variant="body2" color="textSecondary" my={2}>
                        Introductory prices apply to the first term. All plans
                        and products automatically renew unless you cancel. The
                        renewal will be for the same term length and at the
                        regular rates reflected in your Billing Section
                      </Typography>
                    </Box>
                  </Box>
                </>
              }
            />
            <Route
              path="create-domain"
              element={
                <>
                  {" "}
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
                            <Box sx={{ flex: 1 }}>
                              <Stack>
                                <TextField
                                  placeholder="Search domain names"
                                  onChange={(e) =>
                                    setDomainName(e.target.value)
                                  }
                                  value={domainName}
                                  size="small"
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      searchDomainsBtn();
                                    }
                                  }}
                                />
                              </Stack>
                            </Box>
                          </Box>

                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox />}
                              checked={addDomainPrivacy}
                              onChange={handleAddDomainPrivacyChange}
                              label="Add Domain Privacy to each domain for $14.95 per year."
                            />
                          </FormGroup>
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
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Button
                                        variant="contained"
                                        onClick={() =>
                                          addToCart(possibleDomain)
                                        }
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
                                <Typography mb={1}>
                                  {formData.selectedDomain}
                                </Typography>
                                <Divider />
                              </Box>
                            )}
                            {addDomainPrivacy && (
                              <Box sx={{ my: 2 }}>
                                <Typography mb={1}>Domain Privacy</Typography>
                                <Typography>$14.95</Typography>
                                <Divider />
                              </Box>
                            )}
                          </div>
                          <Box sx={{ textAlign: "center", my: 2 }}>
                            <Link
                              to="/additional-services"
                              style={{
                                textDecoration: "none",
                              }}
                            >
                              <Button variant="contained">Continue</Button>
                            </Link>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </>
              }
            />
            <Route
              path="additional-services"
              element={
                <>
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
                            <Box sx={{ display: "flex" }}>
                              <Box sx={{ flex: 1 }}>
                                <FormGroup>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Add"
                                  />
                                </FormGroup>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography>/year</Typography>
                              </Box>
                            </Box>
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
                                <Typography mb={1}>
                                  {formData.selectedDomain}
                                </Typography>
                                <Divider />
                              </Box>
                            )}
                            {addDomainPrivacy && (
                              <Box sx={{ my: 2 }}>
                                <Typography mb={1}>Domain Privacy</Typography>
                                <Typography>$14.95</Typography>
                                <Divider />
                              </Box>
                            )}
                          </div>
                          <Link to="/checkout">Continue</Link>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </>
              }
            />
            <Route
              path="checkout"
              element={
                <>
                  {" "}
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
                      <Card sx={{ mb: 4 }}>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold" mb={2}>
                            Account Information
                          </Typography>
                          <Stack
                            display="flex"
                            flexDirection={{ xs: "column", md: "row" }}
                            gap={2}
                            mb={2}
                          >
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Stack>
                          <Stack
                            display="flex"
                            flexDirection={{ xs: "column", md: "row" }}
                            gap={2}
                          >
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              sx={{ width: "70%" }}
                            />
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              sx={{ width: "30%" }}
                            />
                          </Stack>
                        </CardContent>
                      </Card>
                      <Card sx={{ mb: 4 }}>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold" mb={2}>
                            Billing Address
                          </Typography>
                          <Stack
                            display="flex"
                            flexDirection={{ xs: "column", md: "row" }}
                            gap={2}
                            mb={2}
                          >
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Stack>
                          <Stack
                            display="flex"
                            flexDirection={{ xs: "column", md: "row" }}
                            gap={2}
                          >
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              sx={{ width: "70%" }}
                            />
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              sx={{ width: "30%" }}
                            />
                          </Stack>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold" mb={2}>
                            Payment Information
                          </Typography>
                          <Stack
                            display="flex"
                            flexDirection={{ xs: "column", md: "row" }}
                            gap={2}
                            mb={2}
                          >
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Stack>
                          <Stack
                            display="flex"
                            flexDirection={{ xs: "column", md: "row" }}
                            gap={2}
                          >
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              sx={{ width: "70%" }}
                            />
                            <TextField
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined"
                              size="small"
                              sx={{ width: "30%" }}
                            />
                          </Stack>
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
                                <Typography mb={1}>
                                  {formData.selectedDomain}
                                </Typography>
                                <Divider />
                              </Box>
                            )}
                            {addDomainPrivacy && (
                              <Box sx={{ my: 2 }}>
                                <Typography mb={1}>Domain Privacy</Typography>
                                <Typography>$14.95</Typography>
                                <Divider />
                              </Box>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}
