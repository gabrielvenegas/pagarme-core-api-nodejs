/**
 * PagarmeCoreApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const GetCheckoutBoletoPaymentResponse = require('../lib/Models/GetCheckoutBoletoPaymentResponse');
const GetCheckoutCardInstallmentOptionsResponse =
  require('../lib/Models/GetCheckoutCardInstallmentOptionsResponse');
const UpdateSubscriptionBillingDateRequest =
  require('../lib/Models/UpdateSubscriptionBillingDateRequest');
const ListSubscriptionItemsResponse = require('../lib/Models/ListSubscriptionItemsResponse');
const ListUsagesResponse = require('../lib/Models/ListUsagesResponse');
const CreateCardOptionsRequest = require('../lib/Models/CreateCardOptionsRequest');
const UpdateSubscriptionCardRequest = require('../lib/Models/UpdateSubscriptionCardRequest');
const ListOrderResponse = require('../lib/Models/ListOrderResponse');
const UpdateChargeDueDateRequest = require('../lib/Models/UpdateChargeDueDateRequest');
const CreateCancelSubscriptionRequest = require('../lib/Models/CreateCancelSubscriptionRequest');
const ListTransactionsResponse = require('../lib/Models/ListTransactionsResponse');
const ListChargesResponse = require('../lib/Models/ListChargesResponse');
const ListInvoicesResponse = require('../lib/Models/ListInvoicesResponse');
const ListSubscriptionsResponse = require('../lib/Models/ListSubscriptionsResponse');
const ListPlansResponse = require('../lib/Models/ListPlansResponse');
const ListAddressesResponse = require('../lib/Models/ListAddressesResponse');
const ListCardsResponse = require('../lib/Models/ListCardsResponse');
const ListCustomersResponse = require('../lib/Models/ListCustomersResponse');
const PagingResponse = require('../lib/Models/PagingResponse');
const GetOrderResponse = require('../lib/Models/GetOrderResponse');
const GetAntifraudResponse = require('../lib/Models/GetAntifraudResponse');
const UpdateCardRequest = require('../lib/Models/UpdateCardRequest');
const UpdatePlanItemRequest = require('../lib/Models/UpdatePlanItemRequest');
const UpdateSubscriptionItemRequest = require('../lib/Models/UpdateSubscriptionItemRequest');
const CreatePlanItemRequest = require('../lib/Models/CreatePlanItemRequest');
const CreateAccessTokenRequest = require('../lib/Models/CreateAccessTokenRequest');
const UpdatePlanRequest = require('../lib/Models/UpdatePlanRequest');
const GetChargeResponse = require('../lib/Models/GetChargeResponse');
const GetPricingSchemeResponse = require('../lib/Models/GetPricingSchemeResponse');
const GetDiscountResponse = require('../lib/Models/GetDiscountResponse');
const CreatePriceBracketRequest = require('../lib/Models/CreatePriceBracketRequest');
const GetPriceBracketResponse = require('../lib/Models/GetPriceBracketResponse');
const GetCustomerResponse = require('../lib/Models/GetCustomerResponse');
const CreateSetupRequest = require('../lib/Models/CreateSetupRequest');
const GetSetupResponse = require('../lib/Models/GetSetupResponse');
const CreateAddressRequest = require('../lib/Models/CreateAddressRequest');
const CreatePlanRequest = require('../lib/Models/CreatePlanRequest');
const CreatePricingSchemeRequest = require('../lib/Models/CreatePricingSchemeRequest');
const UpdatePricingSchemeRequest = require('../lib/Models/UpdatePricingSchemeRequest');
const UpdatePriceBracketRequest = require('../lib/Models/UpdatePriceBracketRequest');
const UpdateChargeCardRequest = require('../lib/Models/UpdateChargeCardRequest');
const GetPlanItemResponse = require('../lib/Models/GetPlanItemResponse');
const GetPlanResponse = require('../lib/Models/GetPlanResponse');
const CreatePhoneRequest = require('../lib/Models/CreatePhoneRequest');
const CreatePhonesRequest = require('../lib/Models/CreatePhonesRequest');
const GetPhoneResponse = require('../lib/Models/GetPhoneResponse');
const GetPhonesResponse = require('../lib/Models/GetPhonesResponse');
const CreateVoucherPaymentRequest = require('../lib/Models/CreateVoucherPaymentRequest');
const GetVoucherTransactionResponse = require('../lib/Models/GetVoucherTransactionResponse');
const CreateCaptureChargeRequest = require('../lib/Models/CreateCaptureChargeRequest');
const CreateBankTransferPaymentRequest = require('../lib/Models/CreateBankTransferPaymentRequest');
const GetBankTransferTransactionResponse =
  require('../lib/Models/GetBankTransferTransactionResponse');
const GetSafetyPayTransactionResponse = require('../lib/Models/GetSafetyPayTransactionResponse');
const ListAccessTokensResponse = require('../lib/Models/ListAccessTokensResponse');
const CreateTokenRequest = require('../lib/Models/CreateTokenRequest');
const CreateCardTokenRequest = require('../lib/Models/CreateCardTokenRequest');
const GetCardTokenResponse = require('../lib/Models/GetCardTokenResponse');
const GetTokenResponse = require('../lib/Models/GetTokenResponse');
const UpdateMetadataRequest = require('../lib/Models/UpdateMetadataRequest');
const CreateCheckoutCardInstallmentOptionRequest =
  require('../lib/Models/CreateCheckoutCardInstallmentOptionRequest');
const CreateCheckoutBoletoPaymentRequest =
  require('../lib/Models/CreateCheckoutBoletoPaymentRequest');
const CreateCheckoutDebitCardPaymentRequest =
  require('../lib/Models/CreateCheckoutDebitCardPaymentRequest');
const GetCheckoutPaymentSettingsResponse =
  require('../lib/Models/GetCheckoutPaymentSettingsResponse');
const CreateSellerRequest = require('../lib/Models/CreateSellerRequest');
const GetSellerResponse = require('../lib/Models/GetSellerResponse');
const CreateTransferRequest = require('../lib/Models/CreateTransferRequest');
const GetTransferResponse = require('../lib/Models/GetTransferResponse');
const CreateBankAccountRequest = require('../lib/Models/CreateBankAccountRequest');
const GetRecipientResponse = require('../lib/Models/GetRecipientResponse');
const UpdateRecipientRequest = require('../lib/Models/UpdateRecipientRequest');
const GetGatewayRecipientResponse = require('../lib/Models/GetGatewayRecipientResponse');
const ListRecipientResponse = require('../lib/Models/ListRecipientResponse');
const UpdateRecipientBankAccountRequest =
  require('../lib/Models/UpdateRecipientBankAccountRequest');
const ListTransferResponse = require('../lib/Models/ListTransferResponse');
const GetBalanceResponse = require('../lib/Models/GetBalanceResponse');
const CreateAnticipationRequest = require('../lib/Models/CreateAnticipationRequest');
const ListAnticipationResponse = require('../lib/Models/ListAnticipationResponse');
const GetAnticipationLimitResponse = require('../lib/Models/GetAnticipationLimitResponse');
const GetAnticipationLimitsResponse = require('../lib/Models/GetAnticipationLimitsResponse');
const GetDeviceResponse = require('../lib/Models/GetDeviceResponse');
const CreateDeviceRequest = require('../lib/Models/CreateDeviceRequest');
const GetLocationResponse = require('../lib/Models/GetLocationResponse');
const CreateLocationRequest = require('../lib/Models/CreateLocationRequest');
const UpdateSubscriptionAffiliationIdRequest =
  require('../lib/Models/UpdateSubscriptionAffiliationIdRequest');
const UpdateInvoiceStatusRequest = require('../lib/Models/UpdateInvoiceStatusRequest');
const GetBillingAddressResponse = require('../lib/Models/GetBillingAddressResponse');
const UpdateAddressRequest = require('../lib/Models/UpdateAddressRequest');
const CreateSubscriptionItemRequest = require('../lib/Models/CreateSubscriptionItemRequest');
const UpdateOrderStatusRequest = require('../lib/Models/UpdateOrderStatusRequest');
const UpdateOrderItemRequest = require('../lib/Models/UpdateOrderItemRequest');
const GetSellersRequest = require('../lib/Models/GetSellersRequest');
const UpdateSellerRequest = require('../lib/Models/UpdateSellerRequest');
const ListSellerResponse = require('../lib/Models/ListSellerResponse');
const GetUsageResponse = require('../lib/Models/GetUsageResponse');
const UpdateCustomerRequest = require('../lib/Models/UpdateCustomerRequest');
const GetBoletoTransactionResponse = require('../lib/Models/GetBoletoTransactionResponse');
const CreateBoletoPaymentRequest = require('../lib/Models/CreateBoletoPaymentRequest');
const GetInvoiceItemResponse = require('../lib/Models/GetInvoiceItemResponse');
const CreateCreditCardPaymentRequest = require('../lib/Models/CreateCreditCardPaymentRequest');
const ListDiscountsResponse = require('../lib/Models/ListDiscountsResponse');
const CreateSubscriptionRequest = require('../lib/Models/CreateSubscriptionRequest');
const CreateUsageRequest = require('../lib/Models/CreateUsageRequest');
const GetSubscriptionResponse = require('../lib/Models/GetSubscriptionResponse');
const CreateDiscountRequest = require('../lib/Models/CreateDiscountRequest');
const CreateIncrementRequest = require('../lib/Models/CreateIncrementRequest');
const GetSubscriptionItemResponse = require('../lib/Models/GetSubscriptionItemResponse');
const GetUsagesDetailsResponse = require('../lib/Models/GetUsagesDetailsResponse');
const GetIncrementResponse = require('../lib/Models/GetIncrementResponse');
const ListIncrementsResponse = require('../lib/Models/ListIncrementsResponse');
const CreateOrderRequest = require('../lib/Models/CreateOrderRequest');
const ListUsagesDetailsResponse = require('../lib/Models/ListUsagesDetailsResponse');
const GetPeriodResponse = require('../lib/Models/GetPeriodResponse');
const GetCardResponse = require('../lib/Models/GetCardResponse');
const CreateTransferSettingsRequest = require('../lib/Models/CreateTransferSettingsRequest');
const UpdateTransferSettingsRequest = require('../lib/Models/UpdateTransferSettingsRequest');
const CreateRecipientRequest = require('../lib/Models/CreateRecipientRequest');
const GetGatewayResponseResponse = require('../lib/Models/GetGatewayResponseResponse');
const GetGatewayErrorResponse = require('../lib/Models/GetGatewayErrorResponse');
const CreateThreeDSecureRequest = require('../lib/Models/CreateThreeDSecureRequest');
const CreatePaymentAuthenticationRequest =
  require('../lib/Models/CreatePaymentAuthenticationRequest');
const CreateDebitCardPaymentRequest = require('../lib/Models/CreateDebitCardPaymentRequest');
const CreatePaymentRequest = require('../lib/Models/CreatePaymentRequest');
const UpdateChargePaymentMethodRequest = require('../lib/Models/UpdateChargePaymentMethodRequest');
const CreateApplePayHeaderRequest = require('../lib/Models/CreateApplePayHeaderRequest');
const CreateApplePayRequest = require('../lib/Models/CreateApplePayRequest');
const GetDebitCardTransactionResponse = require('../lib/Models/GetDebitCardTransactionResponse');
const GetTransactionResponse = require('../lib/Models/GetTransactionResponse');
const CreateCashPaymentRequest = require('../lib/Models/CreateCashPaymentRequest');
const CreatePeriodRequest = require('../lib/Models/CreatePeriodRequest');
const CreateConfirmPaymentRequest = require('../lib/Models/CreateConfirmPaymentRequest');
const GetCashTransactionResponse = require('../lib/Models/GetCashTransactionResponse');
const UpdateSubscriptionDueDaysRequest = require('../lib/Models/UpdateSubscriptionDueDaysRequest');
const UpdateSubscriptionMinimumPriceRequest =
  require('../lib/Models/UpdateSubscriptionMinimumPriceRequest');
const GetSplitResponse = require('../lib/Models/GetSplitResponse');
const CreateCancelChargeRequest = require('../lib/Models/CreateCancelChargeRequest');
const CreateOrderItemRequest = require('../lib/Models/CreateOrderItemRequest');
const CreateCancelChargeSplitRulesRequest =
  require('../lib/Models/CreateCancelChargeSplitRulesRequest');
const CreateCheckoutPaymentRequest = require('../lib/Models/CreateCheckoutPaymentRequest');
const CreateShippingRequest = require('../lib/Models/CreateShippingRequest');
const GetShippingResponse = require('../lib/Models/GetShippingResponse');
const UpdateSubscriptionStartAtRequest = require('../lib/Models/UpdateSubscriptionStartAtRequest');
const GetCheckoutCreditCardPaymentResponse =
  require('../lib/Models/GetCheckoutCreditCardPaymentResponse');
const GetThreeDSecureResponse = require('../lib/Models/GetThreeDSecureResponse');
const CreateCheckoutCreditCardPaymentRequest =
  require('../lib/Models/CreateCheckoutCreditCardPaymentRequest');
const GetPaymentAuthenticationResponse = require('../lib/Models/GetPaymentAuthenticationResponse');
const GetCheckoutDebitCardPaymentResponse =
  require('../lib/Models/GetCheckoutDebitCardPaymentResponse');
const GetCreditCardTransactionResponse = require('../lib/Models/GetCreditCardTransactionResponse');
const CreateSplitRequest = require('../lib/Models/CreateSplitRequest');
const CreateSplitOptionsRequest = require('../lib/Models/CreateSplitOptionsRequest');
const UpdateCurrentCycleEndDateRequest = require('../lib/Models/UpdateCurrentCycleEndDateRequest');
const CreateTransactionReportFileRequest =
  require('../lib/Models/CreateTransactionReportFileRequest');
const ListTransactionsFilesResponse = require('../lib/Models/ListTransactionsFilesResponse');
const GetTransactionReportFileResponse = require('../lib/Models/GetTransactionReportFileResponse');
const CreateCheckoutBankTransferRequest =
  require('../lib/Models/CreateCheckoutBankTransferRequest');
const ListChargeTransactionsResponse = require('../lib/Models/ListChargeTransactionsResponse');
const UpdateCurrentCycleStatusRequest = require('../lib/Models/UpdateCurrentCycleStatusRequest');
const CreateGooglePayRequest = require('../lib/Models/CreateGooglePayRequest');
const CreateGooglePayHeaderRequest = require('../lib/Models/CreateGooglePayHeaderRequest');
const CreateCardPaymentContactlessRequest =
  require('../lib/Models/CreateCardPaymentContactlessRequest');
const CreateInvoiceRequest = require('../lib/Models/CreateInvoiceRequest');
const UpdateSubscriptionPaymentMethodRequest =
  require('../lib/Models/UpdateSubscriptionPaymentMethodRequest');
const ListCyclesResponse = require('../lib/Models/ListCyclesResponse');
const CreateAntifraudRequest = require('../lib/Models/CreateAntifraudRequest');
const CreateClearSaleRequest = require('../lib/Models/CreateClearSaleRequest');
const CreateChargeRequest = require('../lib/Models/CreateChargeRequest');
const GetInvoiceResponse = require('../lib/Models/GetInvoiceResponse');
const CreateCustomerRequest = require('../lib/Models/CreateCustomerRequest');
const GetCheckoutBankTransferPaymentResponse =
  require('../lib/Models/GetCheckoutBankTransferPaymentResponse');
const GetCheckoutPaymentResponse = require('../lib/Models/GetCheckoutPaymentResponse');
const CreateCardRequest = require('../lib/Models/CreateCardRequest');
const GetAccessTokenResponse = require('../lib/Models/GetAccessTokenResponse');
const GetOrderItemResponse = require('../lib/Models/GetOrderItemResponse');
const GetBankAccountResponse = require('../lib/Models/GetBankAccountResponse');
const GetAnticipationResponse = require('../lib/Models/GetAnticipationResponse');
const GetAddressResponse = require('../lib/Models/GetAddressResponse');
const CreateEmvDataTlvDecryptRequest = require('../lib/Models/CreateEmvDataTlvDecryptRequest');
const CreateEmvDataDukptDecryptRequest = require('../lib/Models/CreateEmvDataDukptDecryptRequest');
const CreateEmvDataDecryptRequest = require('../lib/Models/CreateEmvDataDecryptRequest');
const CreateEmvDecryptRequest = require('../lib/Models/CreateEmvDecryptRequest');
const CreateCardPaymentContactlessPOIRequest =
  require('../lib/Models/CreateCardPaymentContactlessPOIRequest');
const GetUsageReportResponse = require('../lib/Models/GetUsageReportResponse');
const GetChargesSummaryResponse = require('../lib/Models/GetChargesSummaryResponse');
const CreateWithdrawRequest = require('../lib/Models/CreateWithdrawRequest');
const GetWithdrawTargetResponse = require('../lib/Models/GetWithdrawTargetResponse');
const GetWithdrawSourceResponse = require('../lib/Models/GetWithdrawSourceResponse');
const GetWithdrawResponse = require('../lib/Models/GetWithdrawResponse');
const GetTransferSourceResponse = require('../lib/Models/GetTransferSourceResponse');
const GetTransferTargetResponse = require('../lib/Models/GetTransferTargetResponse');
const GetTransfer = require('../lib/Models/GetTransfer');
const CreateTransfer = require('../lib/Models/CreateTransfer');
const ListTransfers = require('../lib/Models/ListTransfers');
const ListWithdrawals = require('../lib/Models/ListWithdrawals');
const CreatePrivateLabelPaymentRequest = require('../lib/Models/CreatePrivateLabelPaymentRequest');
const GetPrivateLabelTransactionResponse =
  require('../lib/Models/GetPrivateLabelTransactionResponse');
const CreateAutomaticAnticipationSettingsRequest =
  require('../lib/Models/CreateAutomaticAnticipationSettingsRequest');
const UpdateAutomaticAnticipationSettingsRequest =
  require('../lib/Models/UpdateAutomaticAnticipationSettingsRequest');
const GetAutomaticAnticipationResponse = require('../lib/Models/GetAutomaticAnticipationResponse');
const GetSplitOptionsResponse = require('../lib/Models/GetSplitOptionsResponse');
const CreateSubMerchantRequest = require('../lib/Models/CreateSubMerchantRequest');
const GetPixTransactionResponse = require('../lib/Models/GetPixTransactionResponse');
const PixAdditionalInformation = require('../lib/Models/PixAdditionalInformation');
const CreatePixPaymentRequest = require('../lib/Models/CreatePixPaymentRequest');
const GetTransferSettingsResponse = require('../lib/Models/GetTransferSettingsResponse');
const ErrorException = require('../lib/Exceptions/ErrorException');

const classMap = {
    GetCheckoutBoletoPaymentResponse,
    GetCheckoutCardInstallmentOptionsResponse,
    UpdateSubscriptionBillingDateRequest,
    ListSubscriptionItemsResponse,
    ListUsagesResponse,
    CreateCardOptionsRequest,
    UpdateSubscriptionCardRequest,
    ListOrderResponse,
    UpdateChargeDueDateRequest,
    CreateCancelSubscriptionRequest,
    ListTransactionsResponse,
    ListChargesResponse,
    ListInvoicesResponse,
    ListSubscriptionsResponse,
    ListPlansResponse,
    ListAddressesResponse,
    ListCardsResponse,
    ListCustomersResponse,
    PagingResponse,
    GetOrderResponse,
    GetAntifraudResponse,
    UpdateCardRequest,
    UpdatePlanItemRequest,
    UpdateSubscriptionItemRequest,
    CreatePlanItemRequest,
    CreateAccessTokenRequest,
    UpdatePlanRequest,
    GetChargeResponse,
    GetPricingSchemeResponse,
    GetDiscountResponse,
    CreatePriceBracketRequest,
    GetPriceBracketResponse,
    GetCustomerResponse,
    CreateSetupRequest,
    GetSetupResponse,
    CreateAddressRequest,
    CreatePlanRequest,
    CreatePricingSchemeRequest,
    UpdatePricingSchemeRequest,
    UpdatePriceBracketRequest,
    UpdateChargeCardRequest,
    GetPlanItemResponse,
    GetPlanResponse,
    CreatePhoneRequest,
    CreatePhonesRequest,
    GetPhoneResponse,
    GetPhonesResponse,
    CreateVoucherPaymentRequest,
    GetVoucherTransactionResponse,
    CreateCaptureChargeRequest,
    CreateBankTransferPaymentRequest,
    GetBankTransferTransactionResponse,
    GetSafetyPayTransactionResponse,
    ListAccessTokensResponse,
    CreateTokenRequest,
    CreateCardTokenRequest,
    GetCardTokenResponse,
    GetTokenResponse,
    UpdateMetadataRequest,
    CreateCheckoutCardInstallmentOptionRequest,
    CreateCheckoutBoletoPaymentRequest,
    CreateCheckoutDebitCardPaymentRequest,
    GetCheckoutPaymentSettingsResponse,
    CreateSellerRequest,
    GetSellerResponse,
    CreateTransferRequest,
    GetTransferResponse,
    CreateBankAccountRequest,
    GetRecipientResponse,
    UpdateRecipientRequest,
    GetGatewayRecipientResponse,
    ListRecipientResponse,
    UpdateRecipientBankAccountRequest,
    ListTransferResponse,
    GetBalanceResponse,
    CreateAnticipationRequest,
    ListAnticipationResponse,
    GetAnticipationLimitResponse,
    GetAnticipationLimitsResponse,
    GetDeviceResponse,
    CreateDeviceRequest,
    GetLocationResponse,
    CreateLocationRequest,
    UpdateSubscriptionAffiliationIdRequest,
    UpdateInvoiceStatusRequest,
    GetBillingAddressResponse,
    UpdateAddressRequest,
    CreateSubscriptionItemRequest,
    UpdateOrderStatusRequest,
    UpdateOrderItemRequest,
    GetSellersRequest,
    UpdateSellerRequest,
    ListSellerResponse,
    GetUsageResponse,
    UpdateCustomerRequest,
    GetBoletoTransactionResponse,
    CreateBoletoPaymentRequest,
    GetInvoiceItemResponse,
    CreateCreditCardPaymentRequest,
    ListDiscountsResponse,
    CreateSubscriptionRequest,
    CreateUsageRequest,
    GetSubscriptionResponse,
    CreateDiscountRequest,
    CreateIncrementRequest,
    GetSubscriptionItemResponse,
    GetUsagesDetailsResponse,
    GetIncrementResponse,
    ListIncrementsResponse,
    CreateOrderRequest,
    ListUsagesDetailsResponse,
    GetPeriodResponse,
    GetCardResponse,
    CreateTransferSettingsRequest,
    UpdateTransferSettingsRequest,
    CreateRecipientRequest,
    GetGatewayResponseResponse,
    GetGatewayErrorResponse,
    CreateThreeDSecureRequest,
    CreatePaymentAuthenticationRequest,
    CreateDebitCardPaymentRequest,
    CreatePaymentRequest,
    UpdateChargePaymentMethodRequest,
    CreateApplePayHeaderRequest,
    CreateApplePayRequest,
    GetDebitCardTransactionResponse,
    GetTransactionResponse,
    CreateCashPaymentRequest,
    CreatePeriodRequest,
    CreateConfirmPaymentRequest,
    GetCashTransactionResponse,
    UpdateSubscriptionDueDaysRequest,
    UpdateSubscriptionMinimumPriceRequest,
    GetSplitResponse,
    CreateCancelChargeRequest,
    CreateOrderItemRequest,
    CreateCancelChargeSplitRulesRequest,
    CreateCheckoutPaymentRequest,
    CreateShippingRequest,
    GetShippingResponse,
    UpdateSubscriptionStartAtRequest,
    GetCheckoutCreditCardPaymentResponse,
    GetThreeDSecureResponse,
    CreateCheckoutCreditCardPaymentRequest,
    GetPaymentAuthenticationResponse,
    GetCheckoutDebitCardPaymentResponse,
    GetCreditCardTransactionResponse,
    CreateSplitRequest,
    CreateSplitOptionsRequest,
    UpdateCurrentCycleEndDateRequest,
    CreateTransactionReportFileRequest,
    ListTransactionsFilesResponse,
    GetTransactionReportFileResponse,
    CreateCheckoutBankTransferRequest,
    ListChargeTransactionsResponse,
    UpdateCurrentCycleStatusRequest,
    CreateGooglePayRequest,
    CreateGooglePayHeaderRequest,
    CreateCardPaymentContactlessRequest,
    CreateInvoiceRequest,
    UpdateSubscriptionPaymentMethodRequest,
    ListCyclesResponse,
    CreateAntifraudRequest,
    CreateClearSaleRequest,
    CreateChargeRequest,
    GetInvoiceResponse,
    CreateCustomerRequest,
    GetCheckoutBankTransferPaymentResponse,
    GetCheckoutPaymentResponse,
    CreateCardRequest,
    GetAccessTokenResponse,
    GetOrderItemResponse,
    GetBankAccountResponse,
    GetAnticipationResponse,
    GetAddressResponse,
    CreateEmvDataTlvDecryptRequest,
    CreateEmvDataDukptDecryptRequest,
    CreateEmvDataDecryptRequest,
    CreateEmvDecryptRequest,
    CreateCardPaymentContactlessPOIRequest,
    GetUsageReportResponse,
    GetChargesSummaryResponse,
    CreateWithdrawRequest,
    GetWithdrawTargetResponse,
    GetWithdrawSourceResponse,
    GetWithdrawResponse,
    GetTransferSourceResponse,
    GetTransferTargetResponse,
    GetTransfer,
    CreateTransfer,
    ListTransfers,
    ListWithdrawals,
    CreatePrivateLabelPaymentRequest,
    GetPrivateLabelTransactionResponse,
    CreateAutomaticAnticipationSettingsRequest,
    UpdateAutomaticAnticipationSettingsRequest,
    GetAutomaticAnticipationResponse,
    GetSplitOptionsResponse,
    CreateSubMerchantRequest,
    GetPixTransactionResponse,
    PixAdditionalInformation,
    CreatePixPaymentRequest,
    GetTransferSettingsResponse,
    ErrorException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;