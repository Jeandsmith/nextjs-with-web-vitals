import { CloudWatchLogsClientConfig, CloudWatchLogsClient, DescribeDestinationsCommandInput, DescribeLogGroupsCommand } from "@aws-sdk/client-cloudwatch-logs";

export const logGroupExits = async (): Promise<boolean> => {
    const clientConfig: CloudWatchLogsClientConfig = {
        region: process.env.NEXT_PUBLIC_REGION,
    };
    const client = new CloudWatchLogsClient(clientConfig);

    const describeLogGroupCommandInput: DescribeDestinationsCommandInput = {
        DestinationNamePrefix: 'webapp_performance_metrics',
    };

    const describeLogGroupCommand = new DescribeLogGroupsCommand(
        describeLogGroupCommandInput
    );

    const response = await client.send(describeLogGroupCommand);
    const { logGroups } = response;
    return logGroups === null;
};

export const setupLogGroups = async () => {


};