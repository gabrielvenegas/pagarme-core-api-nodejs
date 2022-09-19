export = GetDebitCardTransactionResponse;
/**
 * Creates an instance of GetDebitCardTransactionResponse
 */
declare class GetDebitCardTransactionResponse extends GetTransactionResponse {
    statementDescriptor: any;
    acquirerName: any;
    acquirerAffiliationCode: any;
    acquirerTid: any;
    acquirerNsu: any;
    acquirerAuthCode: any;
    operationType: any;
    card: any;
    acquirerMessage: any;
    acquirerReturnCode: any;
    mpi: any;
    eci: any;
    authenticationType: any;
    threedAuthenticationUrl: any;
}
import GetTransactionResponse = require("./GetTransactionResponse");
//# sourceMappingURL=GetDebitCardTransactionResponse.d.ts.map